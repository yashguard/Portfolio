import React from "react";
import { Tooltip } from "react-tooltip";

const SocialIcons = (props) => {
  return (
    <div className="row">
      <a
        href="https://www.facebook.com/yash.guard.1"
        target="_blank"
        rel="noreferrer"
      >
        {props.facebook}
      </a>
      <a
        href="https://www.linkedin.com/in/yash-guard-205a49240"
        target="_blank"
        rel="noreferrer"
      >
        {props.linkedin}
      </a>
      <a href="https://github.com/yashguard" target="_blank" rel="noreferrer">
        {props.github}
      </a>
      <a href="https://twitter.com/GuardYash" target="_blank" rel="noreferrer">
        {props.twitter}
      </a>
      <Tooltip anchorId="facebook" place="top" content="facebook" />
      <Tooltip anchorId="linkedIn" place="top" content="linkedin" />
      <Tooltip anchorId="git" place="top" content="github" />
      <Tooltip anchorId="twitter" place="top" content="twitter" />
    </div>
  );
};

export default SocialIcons;
