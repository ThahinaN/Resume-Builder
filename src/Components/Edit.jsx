
import React, { useRef  } from 'react'
import { MdEditSquare } from "react-icons/md";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import jobRole from '../assets/jobRole.json'

import { FaXmark } from "react-icons/fa6";

import { toast } from 'react-toastify';
import { updateResumeAPI } from '../services/allAPI';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
 
  p: 4,
};

function Edit({resumeData,setResumeData}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const skillRef = useRef()

  const removeSkill=(skill)=>{
    setResumeData({...resumeData,skills:resumeData.skills.filter(item=>item!=skill)})
  }

  const addSkill=(skill)=>{
    if(skill)
    {
        if(resumeData?.skills?.map(item=>item.toLowerCase()).includes(skill.toLowerCase()))
        {
          toast.warning("given skill already exist... please add another one...")
        }
        else
        {
          setResumeData({...resumeData,skills:[...resumeData.skills,skill]})
        }
        skillRef.current.value=""
    }
    else
    {
      toast.info("input valid skill!!!")
    }
  }

  const handleUpdate=async()=>{
     const{ fullName,location,job,email, phone,github, linkedin, degree, college, year, skills, summary} = resumeData
    
        if(fullName &&location && job && email && phone && github && linkedin && degree && college && year && skills.length>0  && summary)
        {
           const response = await updateResumeAPI(resumeData.id,resumeData)
           console.log(response);
    
           if(response.status == "200")
           {
            toast.success("resume Added successfully")
           
            setTimeout(()=>{
              handleClose()
            
              } , 2000 )
          }
        
           
        }
        else
        {
          toast.info("please fill the missing fields")
        }

  }

  return (
    <>
      <button onClick={handleOpen} style={{color:'#714a2f'}} className='btn'><MdEditSquare className='fs-3'/>Edit CV</button>

      {/* Modal */}
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>

           <div className='m-5'>
          <h3>Personal Details</h3>
          <div className='p-3 row'>
         <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData,fullName:e.target.value})} id="standard-basic-name" label="FullName" variant="standard" />
         <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData,location:e.target.value})} id="standard-basic-loc" label="Location" variant="standard" />

    <FormControl variant="standard" >
        <InputLabel id="demo-simple-select-standard-label">Choose Job Title</InputLabel>
        <Select value={resumeData.job}
        onChange={e=>setResumeData({...resumeData,job:e.target.value})}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Job">
          
           {  jobRole.jobRoles.map(job=>(

            <MenuItem value={job} key={job}>{job}</MenuItem>
         
           ))

           }
           
        </Select>
      </FormControl>
          </div>
        </div>
        {/* Contact Details */}

         <div>
        <h3>Contact Details</h3>
          <div className='p-3 row'>
         <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
         <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData,phone:e.target.value})}  id="standard-basic-num" label="Contact" variant="standard" />
         <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData,linkedin:e.target.value})}  id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
         <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData,github:e.target.value})}  id="standard-basic-github" label="Github Link" variant="standard" />
          </div>
            </div>

            {/* Education */}
            <div>
            <h3>Educational Details</h3>
              <div className='p-3 row'>
             <TextField value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})}  id="standard-basic-degree" label="Bachelor's Degreee" variant="standard" />
             <TextField value={resumeData.college} onChange={e=>setResumeData({...resumeData,college:e.target.value})}  id="standard-basic-college" label="College/University Name" variant="standard" />
             <TextField value={resumeData.year} onChange={e=>setResumeData({...resumeData,year:e.target.value})}  id="standard-basic-year" label="Year of Graduation" variant="standard" />
             
              </div>
                </div>

            {/* Skill */}
            <div>
              <h3>Skill</h3>
              <div className="d-flex p-3">
                <input ref={skillRef} type="text" placeholder='Add New Skill' className='form-control' />
                <Button onClick={()=>addSkill(skillRef.current.value)} style={{color:'#714a2f'}}>Add</Button>
              </div>
              <h6>Added Skills : </h6>
              <div className="p-3 d-flex justify-content-between flex-wrap">
                {/* all skill duplicate */}

               { 
                resumeData?.skills?.map(skill => (
                  <Button onClick={()=>removeSkill(skill)} key={skill} variant='contained' sx={{backgroundColor: '#b19596'}} 
               className='my-1' >{skill} <FaXmark className='ms-2' /></Button>
                ))
                }
               

              </div>
            </div>

            {/* summary */}
             <h3>Summary</h3>
              <div className='p-3 row'>
              
               <TextField value={resumeData.summary} onChange={e=>setResumeData({...resumeData,summary:e.target.value})}  id="summary" label="summary" variant="standard" />
            
      </div>

      {/* Submit Button */}
       <Button onClick={handleUpdate}  style={{color:'#714a2f'}} className='btn btn-light'>Update</Button>
           

          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Edit
