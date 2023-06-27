import React from "react";
import Nav from "./Nav";
import Home from "./Home";

const Main = () => {
  return (
    <div className="main">
      <div className="row">
        <div className="nav">
          <Nav />
        </div>
        <div className="sections">
          <Home/>
        </div>
      </div>
    </div>
  );
};

export default Main;
