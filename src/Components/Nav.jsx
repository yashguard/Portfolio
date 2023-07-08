import React from 'react'
import { Link } from "react-scroll";

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
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="home"><li>Home</li></Link>
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="about"><li>About Me</li></Link>
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="whatido"><li>What I Do</li></Link>
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="resume"><li>Resume</li></Link>
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="portfolio"><li>Portfolio</li></Link>
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="testimonial"><li>Testimonial</li></Link>
              <Link style={{cursor : "pointer"}} activeClass="active" smooth spy to="contact"><li>Contact</li></Link>
            </ul>
          </nav>
        </div>
        <div className="social-links"></div>
      </div>
    </div>
  )
}

export default Nav
