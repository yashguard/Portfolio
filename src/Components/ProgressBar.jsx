import Aos from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const ProgressBar = (props) => {
  let [counterPos, setCounterPos] = useState(false);
  let { heading, perc } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <ScrollTrigger
      onEnter={() => setCounterPos(true)}
      onExit={() => setCounterPos(false)}
    >
      <div className="content row justify-content-between">
        <div className="col-xxl-11" style={{ paddingLeft: "0" }}>
          <h4>{heading}</h4>
        </div>
        <div className="col-xxl-1">
          <span>
            {counterPos && (
              <CountUp start={0} end={perc} duration={1} delay={0} />
            )}
            %
          </span>
        </div>
      </div>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${perc}%` }}
          data-aos="slide-right"
        ></div>
      </div>
    </ScrollTrigger>
  );
};

export default ProgressBar;
