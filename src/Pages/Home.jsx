import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div style={{height:'100vh', backgroundImage:'url("/image1.jpeg")' ,backgroundSize:'cover',
      backgroundAttachment: 'fixed' }} className="d-flex justify-content-center align-items-center">
        <div style={{backgroundColor:'rgba(0,0,0,0.35)'}} className='w-50 p-5 rounded text-light align-center'>
          <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
          <Link to={'/steps'} style={{backgroundColor:'#755846'}} className='text-decoration-none text-light' >Make Your Resume with AI</Link>
           
        </div>
    </div>

    {/* {about section} */}

    <div className="container my-5">
      <h1 className="text-center mb-5">What's AI rBuilder</h1>
      <div className="row align-item-center">
        <div className="col-g-1"></div>
        <div className="col-lg-5">
          <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <img src="/image2.jpeg" alt="resume" width={'100%'} height={'550px'} />
        </div>
      </div>
    </div>
    {/* banner */}

    <div style={{height:'80vh', backgroundImage:'url("/image3.jpeg")',backgroundSize:'cover' , backgroundPosition:'center' , backgroundAttachment:'fixed'}}></div>
      {/* testimony */}
      <div className="container my-5">
      <h1 className="text-center mb-5">Testimony</h1>
      <div className="row align-item-center">
        <div className="col-g-1"></div>
        <div className="col-lg-5">
          <h5>Trusted by proffessionals worldwide.</h5>
        <p style={{textAlign:'justify'}}>
At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
</p>

            <p style={{textAlign:'justify'}}> In fact, users who used rBuilder reported getting hired an average of 48 days faster.
 </p>
            <p style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
         <div className="row">

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://img.magnific.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg?semt=ais_hybrid&w=740&q=80"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://i.pinimg.com/736x/7e/83/0e/7e830e9c49dee63d546ba2b376523d30.jpg"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://png.pngtree.com/background/20250726/original/pngtree-a-clean-and-bright-studio-headshot-of-business-professional-white-background-picture-image_16723216.jpg"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://t3.ftcdn.net/jpg/05/83/41/98/360_F_583419866_97XPxjHDJkQ2RKMmGWdgrbqJhEZeQb55.jpg"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://img.magnific.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?semt=ais_hybrid&w=740&q=80"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSV-mI7_AKrz2sBAVAiXqVORBAYBokdV94YAOYE1Jm2XQfl679o5pHtTw&s=10"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://static.vecteezy.com/system/resources/thumbnails/078/511/685/small/a-beautiful-young-business-woman-in-a-suit-photo.jpg"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://png.pngtree.com/png-clipart/20250101/original/pngtree-young-professional-on-the-rise-a-linkedin-portrait-png-image_18490350.png"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://img.magnific.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>
  
  <div className="col-md-3">
    <img
      className="img-fluid p-2"
      src="https://static.vecteezy.com/system/resources/thumbnails/078/511/685/small/a-beautiful-young-business-woman-in-a-suit-photo.jpg"
      alt="image"
      style={{ width: "200px", height: "200px", objectFit: "cover" }}
    />
  </div>

</div>
          </div>
      </div>
    </div>

   
    </>
  )
}

export default Home
