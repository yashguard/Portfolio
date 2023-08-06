import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const ProgressBar = (props) => {
  let { heading, perc } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="content row justify-content-between">
        <div className="col-xxl-11" style={{ paddingLeft: "0" }}>
          <h4>{heading}</h4>
        </div>
        <div className="col-xxl-1">
          <span>{perc}%</span>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${perc}%` }}
          data-aos="slide-right"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
