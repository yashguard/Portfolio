import { motion } from "framer-motion";
import React from "react";

const ProjectDemo = (props) => {
  let { bgColor, option } = props;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="box"
      style={{ backgroundColor: bgColor }}
    >
      <div className="overlay-box row align-items-center justify-content-center">
        <h2>Title</h2>
        <span>JQUERY, HTML, CSS, MEDIAQUERY</span>
      </div>
      <h1>{option}</h1>
    </motion.div>
  );
};

export default ProjectDemo;
