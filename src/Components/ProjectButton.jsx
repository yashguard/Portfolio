import React from "react";

const ProjectButton = (props) => {
  let { option, activeLink, setActiveLink } = props;
  return (
    <div>
      <button
        className={`${activeLink === option ? "active" : ""}`}
        onClick={(e) => setActiveLink(e.target.innerHTML)}
      >
        {option}
      </button>
    </div>
  );
};

export default ProjectButton;
