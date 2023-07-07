import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Typewriter from 'typewriter-effect'


const Home = () => {
  let [state] = useState({
    titleOne : "Hi",
    titleTwo : "Welcome",
    titleThree : "based in Gujarat, Surat, Katargam"
  })
  return (
    <div className='home-section' id='home'>
      <div className="overlay row justify-content-center align-items-center flex-column text-white">
        <h2 className='titleOne'>{state.titleOne}</h2>
        <h3 className='titleTwo'>{state.titleTwo}</h3>
        <h1>
          <Typewriter options={{
            autoStart : true,
            loop : true,
            delay : 40,
            strings : [
              "I'm Yash Guard.",
              "I'm a Front End Developer.",
              "I'm a Back End Developer."
            ]
          }}/>
        </h1>
        <span className='titleThree'>{state.titleThree}</span>
        <Link to="#testimonial" smooth>Hire Me</Link>
      </div>
    </div>
  )
}

export default Home
