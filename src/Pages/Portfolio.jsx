import React, { useEffect, useState } from "react";
import CommonHeading from "../Components/CommonHeading";
import ProjectButton from "../Components/ProjectButton";
import ProjectDemo from "../Components/ProjectDemo";
import { useDispatch, useSelector } from "react-redux";
import { addProjects } from "../Redux/Action";
import { AnimatePresence, motion } from "framer-motion";

const Portfolio = () => {
  let [activeLink, setActiveLink] = useState("ALL");
  let projectDetails = [
    {
      id: 1,
      title: "",
      image: "",
      languages: "abcd",
      option: "CSS",
      bgColor: "red",
    },
    {
      id: 2,
      title: "",
      image: "",
      languages: "abcd",
      option: "REACT JS",
      bgColor: "black",
    },
    {
      id: 3,
      title: "",
      image: "",
      languages: "abcd",
      option: "SASS",
      bgColor: "yellow",
    },
    {
      id: 4,
      title: "",
      image: "",
      languages: "abcd",
      option: "CSS",
      bgColor: "red",
    },
    {
      id: 5,
      title: "",
      image: "",
      languages: "abcd",
      option: "BOOTSTRAP",
      bgColor: "blue",
    },
    {
      id: 6,
      title: "",
      image: "",
      languages: "abcd",
      option: "SASS",
      bgColor: "yellow",
    },
    {
      id: 7,
      title: "",
      image: "",
      languages: "abcd",
      option: "CSS",
      bgColor: "red",
    },
    {
      id: 8,
      title: "",
      image: "",
      languages: "abcd",
      option: "REACT JS",
      bgColor: "black",
    },
    {
      id: 9,
      title: "",
      image: "",
      languages: "abcd",
      option: "SASS",
      bgColor: "yellow",
    },
    {
      id: 10,
      title: "",
      image: "",
      languages: "abcd",
      option: "CSS",
      bgColor: "red",
    },
    {
      id: 11,
      title: "",
      image: "",
      languages: "abcd",
      option: "BOOTSTRAP",
      bgColor: "blue",
    },
    {
      id: 12,
      title: "",
      image: "",
      languages: "abcd",
      option: "SASS",
      bgColor: "yellow",
    },
  ];
  let dispatch = useDispatch();
  let projects = useSelector((store) => store.projects);
  const handleActiveLink = async (value) => {
    await setActiveLink(value);
    await handleProjects(value);
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
        <div className="project-box">
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
          <motion.div className="project-demo">
            {projects.map((ele, i) => {
              return (
                <AnimatePresence>
                  <ProjectDemo key={ele.id} {...ele} />;
                </AnimatePresence>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
