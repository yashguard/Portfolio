import React from "react";
import CommonHeading from "../Components/CommonHeading";
import Content from "../Components/Content";
import AboutMyself from "../Components/AboutMyself";

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <CommonHeading heading="ABOUT ME" subHeading="Know Me More" />
        <div className="about-me row justify-content-between">
          <Content />
          <AboutMyself />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
