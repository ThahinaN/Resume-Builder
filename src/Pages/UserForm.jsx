import React, { useState } from 'react'
import UserInputs from '../Components/UserInputs'
import Preview from '../Components/Preview'



function UserForm() {

  const[resumeData,setResumeData] = useState({
    fullName:"",
    location:"",
    job:"",
    email:"",
    phone:"",
    github:"",
    linkedin:"",
    degree:"",
    college:"",
    year:"",
    skills:[],
    summary:""
  })
  return (
    <div>
      <div className="container">
         <div className="row">
            <div className="col-lg-6">
              <UserInputs resumeData={resumeData} setResumeData={setResumeData}/>
            </div>
            <div className="col-lg-6">
              {resumeData.fullName&& <Preview resumeData={resumeData}/>} 
            </div>          
         </div>      
      </div>
    </div>
  )
}

export default UserForm
