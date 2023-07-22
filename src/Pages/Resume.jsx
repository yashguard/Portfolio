import React from 'react'
import CommonHeading from "../Components/CommonHeading";

const Resume = () => {
  return (
    <section className='resume-section' id='resume'>
      <CommonHeading heading="SUMMARY" subHeading="Resume" />
      <div className="education"></div>
      <div className="experience"></div>
    </section>
  )
}

export default Resume
