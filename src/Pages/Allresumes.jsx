import React, { useEffect, useState,useMemo } from 'react'
import { FaSearch, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { allResumesAPI, deleteResumeAPI } from '../services/allAPI'

import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import Button from '@mui/material/Button';



function Allresumes() {



  const[allResumes,setAllResumes]= useState([])

  const [dummyResumes,setDummyResumes] = useState([])

  const [searchKey,setSearchKey] = useState("")

  const [currentPage,setCurrentPage] = useState(1)
  const rowsPerPage = 4
  const lastIndexOfCurrentPage = currentPage * rowsPerPage
  const firstIndexOfCurrentPage = lastIndexOfCurrentPage - rowsPerPage
  const currentResume = allResumes.slice(firstIndexOfCurrentPage,lastIndexOfCurrentPage)

  const totalPages = Math.ceil(allResumes.length/rowsPerPage)
  
  useEffect(()=>{
    getAllResumes()
  },[])

  // SEARCH
  const searchOutput = useMemo(()=>{
    setAllResumes(allResumes.filter(item=>item.job.toLowerCase().includes(searchKey.toLowerCase())))
  },[searchKey])

  const getAllResumes = async()=>{
    const response = await allResumesAPI()
    console.log(response);

    if(response.status == "200")
    {
      setAllResumes(response.data)
      setDummyResumes(response.data)


    }
    
  }
  // console.log(allResumes);
  
  // remove

  const removeResume = async(id)=>{

   if(confirm("are you sure want to delete resume"))
  
   {

      const response = await deleteResumeAPI(id)

    if(response.status == 200)
    {
      getAllResumes()
    }
   }
  }
  return (
    <div>
     <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>
      <p style={{textAlign:'justify'}}
       className="my-5">
        All resumes submitted to the platform in one place,
         allowing administrators or recruiters to efficiently view, search, filter, and 
         manage candidate profiles. It provides a quick overview of available candidates 
         and their key details, making the recruitment and candidate-selection process more
          organized and efficient.
        </p>
        <div className="d-flex justify-content-center align-items-center w-50">
          <input onChange={e=>{setSearchKey(e.target.value);setCurrentPage:(1)}} type="text" placeholder='Search Candidate by their Job Roles' className='form-control' />
          <FaSearch style={{marginleft:'-30px'}} />
        </div>
        <table className='my-5 table table-hover table-stripped'>
          <thead>
            <tr className='table-dark'>
              <th>#</th>
              <th>Resume</th>
              <th>Job</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
           {
              currentResume.length>0?
             currentResume.map((resume,index)=> (
               <tr key={resume.id}>
              <td>{index+1}</td>
              <td><Link to={`/resume/${resume.id}/view`}>{resume.fullName}</Link></td>
              <td>{resume.job}</td>
              <td><button onClick={()=>removeResume(resume.id)} className="btn text-danger"> <FaTrash/></button></td>
            </tr>
            )):<p className=' text-danger fw-bolder'>Nothing to display</p>
           }
          </tbody>
        </table>
        <div className="d-flex align-items-center">
          <Button className='btn' onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1} >
            <FaBackward />
          </Button>

          {currentPage} of {totalPages}

           <Button className='btn' onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage==totalPages || totalPages==0} >
            <FaForward />
          </Button>
        </div>

     </div>
    </div>
  )
}

export default Allresumes
