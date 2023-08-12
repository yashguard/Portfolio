import React from "react";

const ProjectButton = (props) => {
  let { option, activeLink, handleActiveLink } = props;
  return (
    <div>
      <button
        className={`${activeLink === option ? "active" : ""}`}
        onClick={(e) => handleActiveLink(e.target.innerHTML)}
      >
        {option}
      </button>
    </div>
  );
};

export default ProjectButton;
