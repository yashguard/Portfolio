import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import AboutMe from "./AboutMe";
import WhatIDo from "./WhatIDo";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <header className="nav padding-0 col-xxl-2 col-xl-3 col-lg-3">
            <Nav />
          </header>
          <div className="sections padding-0 col-xxl-10 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <Home />
            <AboutMe />
            <WhatIDo />
            <Resume />
            <Portfolio />
            <Contact />
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
