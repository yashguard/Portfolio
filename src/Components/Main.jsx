import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import WhatIDo from "./WhatIDo";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="nav">
          <Nav />
        </div>
        <div className="sections">
          <Home/>
          <AboutMe/>
          <WhatIDo/>
          <Resume/>
          <Portfolio/>
          <Testimonial/>
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Main;
