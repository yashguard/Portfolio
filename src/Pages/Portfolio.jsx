import React, { useEffect, useState } from "react";
import CommonHeading from "../Components/CommonHeading";
import ProjectButton from "../Components/ProjectButton";
import ProjectDemo from "../Components/ProjectDemo";
import { useDispatch, useSelector } from "react-redux";
import { addProjects } from "../Redux/Action";

const Portfolio = () => {
  let [activeLink, setActiveLink] = useState("ALL");
  let projectDetails = [
    {
      option: "CSS",
    },
    {
      option: "CSS",
    },
    {
      option: "SASS",
    },
    {
      option: "SASS",
    },
    {
      option: "BOOTSTRAP",
    },
    {
      option: "REACT JS",
    },
  ];
  let dispatch = useDispatch();
  let projects = useSelector((store) => store.projects);
  const handleActiveLink = async (value) => {
    await setActiveLink(value);
    handleProjects(value);
  };

  const handleProjects = (value) => {
    let duplicate = projectDetails.filter((ele) => ele.option === value);
    if (duplicate.length > 0) {
      dispatch(addProjects(duplicate));
    } else {
      dispatch(addProjects(projectDetails));
    }
  };

  useEffect(() => {
    dispatch(addProjects(projectDetails));
  }, []);

  return (
    <section className="project-section" id="portfolio">
      <div className="container">
        <CommonHeading heading="PORTFOLIO" subHeading="My Work" />
        <div className="project-buttons row justify-content-between">
          <ProjectButton
            option="ALL"
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
          <ProjectButton
            option="CSS"
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
          <ProjectButton
            option="SASS"
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
          <ProjectButton
            option="BOOTSTRAP"
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
          <ProjectButton
            option="REACT JS"
            handleActiveLink={handleActiveLink}
            activeLink={activeLink}
          />
        </div>
        <div className="project-demo">
          {projects.map((ele, i) => {
            return (
              <div className="box" key={i}>
                <h1>{ele.option}</h1>
              </div>
            );
          })}
          {/* <ProjectDemo /> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
