import React from 'react'

const AboutMe = () => {
  return (
    <section className='about-section' id='about'>
      <div className="container">
        <div className="common-heading">
          <h2>ABOUT ME</h2>
          <p>Know Me More
            <hr />
          </p>
        </div>
        <div className="about-me row justify-content-between">
          <div className="content col-xxl-8">
            <h3>I'm <span>Yash Guard</span> , a Full Stack Developer</h3>
            <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
          </div>
          <div className="ny-details col-xxl-4">
            <ul>
              <li style={{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}}>Name : <span>Yash Guard</span></li>
              <li style={{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}}>Email : <span style={{color:"#20c997"}}>yashguard2002@gmail.com</span></li>
              <li style={{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}}>Age : <span>20</span></li>
              <li><span>From :</span> India, Gujarat</li>
            </ul>
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
