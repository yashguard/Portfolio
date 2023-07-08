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
        <div className="nav padding-0 col-xxl-2 col-xl-3 col-lg-3">
          <Nav />
        </div>
        <div className="sections padding-0 col-xxl-10 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <Home />
          <AboutMe />
          <WhatIDo />
          <Resume />
          <Portfolio />
          <Testimonial />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
