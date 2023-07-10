import React from "react";
import CommonHeading from "./CommonHeading";
import { FaChartBar, FaCompactDisc, FaGamepad, FaPaintBrush, FaPallet, FaPuzzlePiece } from "react-icons/fa";
import Services from "./Services";

const WhatIDo = () => {
  let setValues = [
    {
      services: "service-1",
      frontHeading: "Graphic Design",
      backHeading: "Graphic Design",
      backContent: "Modern and mobile-ready website that will help of your marketing.",
      icon: <FaPaintBrush />
    },
    {
      services: "service-2",
      frontHeading: "Web Development",
      backHeading: "Web Development",
      backContent: "Modern and mobile-ready website that will help of your marketing.",
      icon: <FaPallet />
    },
    {
      services: "service-3",
      frontHeading: "Media Marketing",
      backHeading: "Media Marketing",
      backContent: "Modern and mobile-ready website that will help of your marketing.",
      icon: <FaCompactDisc />
    },
    {
      services: "service-4",
      frontHeading: "Advetising",
      backHeading: "Advetising",
      backContent: "Modern and mobile-ready website that will help of your marketing.",
      icon: <FaPuzzlePiece />
    },
    {
      services: "service-5",
      frontHeading: "Game Development",
      backHeading: "Game Development",
      backContent: "Modern and mobile-ready website that will help of your marketing.",
      icon: <FaGamepad />
    },
    {
      services: "service-6",
      frontHeading: "Analytics",
      backHeading: "Analytics",
      backContent: "Modern and mobile-ready website that will help of your marketing.",
      icon: <FaChartBar />
    }
  ]
  return (
    <section className="service-section" id="whatido">
      <div className="container">
        <CommonHeading heading="SERVICES" subHeading="What I Do?" />
        <div className="my-services row">
          {setValues.map((ele, i) => {
            return <Services key={i} {...ele} />
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
