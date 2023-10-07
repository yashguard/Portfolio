import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ToolTip from "./ToolTip";

const FollowMe = () => {
  return (
    <div>
      <h3>FOLLOW ME</h3>
        <ToolTip
          facebook={<FaFacebook id="facebook" />}
          linkedin={<FaLinkedin id="linkedIn" />}
          github={<FaGithub id="git" />}
          twitter={<FaTwitter id="twitter" />}
        />
    </div>
  );
};

export default FollowMe;
