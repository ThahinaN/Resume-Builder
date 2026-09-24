import React, { useEffect ,useRef,useState  } from 'react'
import Preview from '../Components/Preview'
import Edit from '../Components/Edit'
import { Link ,useParams } from 'react-router-dom'

import { FaFileDownload } from "react-icons/fa";
import { AiFillBackward } from "react-icons/ai";
import { downloadResumeAPI, viewResumeAPI } from '../services/allAPI';

import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";

function ViewResume() {

  // useParams => its a part or react router rom
  const {id}=useParams()


  // response ile data ine display cheyyan  api vech LS il respose ine koduth ath avidun page ilek desiplay cheyyan 
  //  first oru variable ilot athine hold cheyyanam athin usestate use akki single data mathiyond object il an useSate il eduthe like {}

  const [resume,setResume] = useState({})
  // console.log(resume);
  
  const previewRef = useRef()

  useEffect(()=>{
    getResumeDetails()
  },[])

  //  for api calling create asyn opration 
  const getResumeDetails= async()=>{
    const response= await viewResumeAPI(id)
    // console.log(response);
    if(response.status == "200")
    {
      setResume(response.data)
    }
    
  }

  const downloadCV=async()=> {
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
         
   

    canvas.toBlob(async(imgFile)=>{
      
      // create formData to upload file via API
      const formData = new FormData()
      formData.append("file",imgFile)
      formData.append("upload_preset","resumes")

      // generate resumeIMG by calling cloudinay api

      const result =await fetch('https://api.cloudinary.com/v1_1/km8kzo7g/auto/upload',{
        method:'POST',
        body:formData
      })

      const serverData = await result.json()
      console.log(serverData);
      const url = serverData.secure_url
      
       generatePDF(url)

      
    })
  
  }

  const generatePDF=async(resumeIMG)=>{
    let today = new Date()
    //  console.log(today);

    // make  time short 
    let timeStamp = `${today.toLocaleDateString()},${today.toLocaleTimeString()}`;
    // console.log(timeStamp);

    const pdf = new jsPDF();
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeIMG,"PNG",0,0,imageWidth,imageHeight)
    
    // download PDF

    const downloadDetails ={
      timeStamp,resumeId:id,resumeIMG , jobRole:resume.job
    }
    const result = await downloadResumeAPI(downloadDetails)
    console.log(result);

    if(result.status == '201')
    {
      pdf.save(`${resume.fullName}-CV.pdf`)
    }
    
  }
  return (
    <>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              {/* navigation icons */}
              <div className="d-flex justify-content-center align-items-center">
                <button onClick={downloadCV} style={{color:'#714a2f'}} className='btn me-2'> 
                  <FaFileDownload  className='fs-5'/> Download CV </button>

                {/* Edit */}
                 <Edit resumeData={resume} setResumeData={setResume}/>

                 <Link to={'/form'} style={{color:'#714a2f'}} className='btn'>
                 <AiFillBackward className='fs-3' /> Home
                 </Link>
              </div>
              <div ref={previewRef} className="p-5">
                <Preview resumeData={resume}/>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      
    </>
  )
}

export default ViewResume
































































 // console.log(previewTag);
    // const imgURL = canvas.toDataURL('image/png')
    // console.log(imgURL);
   
    // if we just given this URL it will be too long to store in JSON so we need to make it Short 
    
    // convert to shortURL  here use toBlob

    // or
    // convert to shortURL here use cloudinary



    // const shortURL = URL.createObjectURL(Blob)
      // // console.log(shortURL);
      // generatePDF(shortURL)
