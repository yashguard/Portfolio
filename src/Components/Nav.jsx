import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Nav = () => {
  return (
    <div>
      <div className="nav-bg row flex-column justify-content-between">
        <div className="profile">
          <div className="picture">
            <img src="Image/profile-picture.jpg" alt="" />
            <h1>Yash Guard</h1>
          </div>
        </div>
        <div className="navbar">
          <nav>
            <ul> 
              <Link to="#home" smooth><li>Home</li></Link>
              <Link to="#about" smooth><li>About Me</li></Link>
              <Link to="#whatido" smooth><li>What I Do</li></Link>
              <Link to="#resume" smooth><li>Resume</li></Link>
              <Link to="#portfolio" smooth><li>Portfolio</li></Link>
              <Link to="#testimonial" smooth><li>Testimonial</li></Link>
              <Link to="#contact" smooth><li>Contact</li></Link>
            </ul>
          </nav>
        </div>
        <div className="social-links"></div>
      </div>
    </div>
  )
}

export default Nav
