import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import Picture from "../Components/Picture";
import NavBar from "../Components/NavBar";
import ToolTip from "../Components/ToolTip";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="nav-bg row flex-column justify-content-between">
      <div className="profile">
        <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          smooth
          spy
          to="home"
        >
          <Picture />
        </Link>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="social-links">
        <ToolTip
          facebook={<FaFacebook id="facebook" />}
          linkedin={<FaLinkedin id="linkedIn" />}
          github={<FaGithub id="git" />}
          twitter={<FaTwitter id="twitter" />}
        />
      </div>
    </div>
  );
};

export default Nav;
