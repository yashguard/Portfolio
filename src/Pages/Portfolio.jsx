import React, { useState } from "react";
import CommonHeading from "../Components/CommonHeading";
import ProjectButton from "../Components/ProjectButton";

const Portfolio = () => {
  let [activeLink,setActiveLink] = useState("ALL");
  return (
    <section className="project-section" id="portfolio">
      <div className="container">
        <CommonHeading heading="PORTFOLIO" subHeading="My Work" />
        <div className='project-buttons row justify-content-between'>
          <ProjectButton option="ALL" setActiveLink={setActiveLink} activeLink={activeLink} />
          <ProjectButton option="Css" setActiveLink={setActiveLink} activeLink={activeLink} />
          <ProjectButton option="SASS" setActiveLink={setActiveLink} activeLink={activeLink} />
          <ProjectButton option="BOOTSTRAP" setActiveLink={setActiveLink} activeLink={activeLink} />
          <ProjectButton option="REACT JS" setActiveLink={setActiveLink} activeLink={activeLink} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;