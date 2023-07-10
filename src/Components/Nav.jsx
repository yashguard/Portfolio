import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import Picture from "./Picture";
import NavBar from "./NavBar";
import ToolTip from "./ToolTip";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <div className="nav-bg row flex-column justify-content-between">
        <div className="profile">
          <Picture />
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
    </div>
  );
};

export default Nav;
