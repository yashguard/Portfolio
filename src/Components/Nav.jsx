import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="home"
              >
                <li>Home</li>
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="about"
              >
                <li>About Me</li>
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="whatido"
              >
                <li>What I Do</li>
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="resume"
              >
                <li>Resume</li>
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="portfolio"
              >
                <li>Portfolio</li>
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="testimonial"
              >
                <li>Testimonial</li>
              </Link>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                smooth
                spy
                to="contact"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="social-links row justify-content-between align-items-center">
          <Link>
            <FaFacebook id="facebook" />
          </Link>
          <Link>
            <FaLinkedin id="linkedIn" />
          </Link>
          <Link>
            <FaGithub id="git" />
          </Link>
          <Link>
            <FaTwitter id="twitter" />
          </Link>
          <Tooltip anchorId="facebook" place="top" content="facebook" />
          <Tooltip anchorId="linkedIn" place="top" content="linkedin" />
          <Tooltip anchorId="git" place="top" content="github" />
          <Tooltip anchorId="twitter" place="top" content="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
