import React from 'react'

function Footer() {
  return (
    <div>
       {/* footer */}
   <footer
  className="footer"
  style={{ backgroundColor: "black", color: "white" }}
>
  <div className="container p-5" >
    <div className="row">

      {/* About Section */}
      <div className="col-md-7" >
        <h4>AI rBuilder</h4>

        <p>
         An AI rBuilder suggest job-specific keywords, professional summaries, 
         and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF.
        </p>
      </div>


      {/* Contact Section */}
      <div className="col-md-5 p-5">

        <h5>Contact Us</h5>

        <p>
          <i className="fa-solid fa-envelope"></i>
          &nbsp; resumebuilder@gmail.com
        </p>

        <p>
          <i className="fa-solid fa-phone"></i>
          &nbsp; 9087654321
        </p>

        <h5>Connect With Us</h5>

        <div className="social-icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>

      </div>

    </div>
  </div>

  {/* Bottom */}
 
</footer>
    </div>
  )
}

export default Footer
