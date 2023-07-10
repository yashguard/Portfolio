import React from 'react'
import CommonHeading from './CommonHeading'
import Content from './Content'
import AboutMyself from './AboutMyself'

const AboutMe = () => {
  return (
    <section className='about-section' id='about'>
      <div className="container">
        <CommonHeading heading="ABOUT ME" subHeading="Know Me More"/>
        <div className="about-me row justify-content-between">
          <Content/>
          <AboutMyself/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
