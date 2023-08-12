import React from "react";
import CommonHeading from "../Components/CommonHeading";
import ProjectButtons from "../Components/ProjectButtons";

const Portfolio = () => {
  return (
    <section className="project-section" id="portfolio">
      <div className="container">
        <CommonHeading heading="PORTFOLIO" subHeading="My Work" />
        <div className="options">
          <ProjectButtons />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
