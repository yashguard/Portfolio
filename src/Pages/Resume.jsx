import React from "react";
import CommonHeading from "../Components/CommonHeading";
import MyEducation from "../Components/MyEducation";
import MyExperience from "../Components/MyExperience";
import ProgressBar from "../Components/ProgressBar";

const Resume = () => {
  let education = [
    {
      year: "2018-2019",
      board: "SSC",
      place: "Gurukul",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      year: "2019-2020",
      board: "HSC",
      place: "Gurukul",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      year: "2021-2024",
      board: "Bachelor Degree (BCA)",
      place: "BMU",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];
  let experience = [
    {
      year: "2021-2022",
      course: "Jr Web Designing",
      place: "Red and White",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      year: "2022-2023",
      course: "JS Developer",
      place: "Red and White",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      year: "2022-2023",
      course: "Front End Developer",
      place: "Red and White",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <CommonHeading heading="SUMMARY" subHeading="Resume" />
        <div className="row justify-content-center">
          <div className="education col-xxl-5">
            <h2>My Education</h2>
            {education.map((ele, i) => {
              return <MyEducation key={i} {...ele} />;
            })}
          </div>
          <div className="experience col-xxl-5">
            <h2>My Experience</h2>
            {experience.map((ele, i) => {
              return <MyExperience key={i} {...ele} />;
            })}
          </div>
        </div>
        <div className="progress-bar-part">
          <h3>My Skills</h3>
          <div className="row justify-content-center">
            <div className="col-xxl-6">
              <ProgressBar heading="React JS" perc="90" />
              <ProgressBar heading="React JS" perc="90" />
              <ProgressBar heading="React JS" perc="90" />
            </div>
            <div className="col-xxl-6">
              <ProgressBar heading="React JS" perc="90" />
              <ProgressBar heading="React JS" perc="90" />
              <ProgressBar heading="React JS" perc="90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
