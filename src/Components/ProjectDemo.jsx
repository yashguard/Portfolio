import React from "react";
import { motion } from "framer-motion";

const ProjectDemo = (props) => {
  let { bgColor, option } = props;
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="box" style={{ backgroundColor: bgColor }}>
        <div className="overlay-box row align-items-center justify-content-center">
          <h2>Title</h2>
          <span>JQUERY, HTML, CSS, MEDIAQUERY</span>
        </div>
        {/* <img src="/image/lawsight.png" alt="" /> */}
      </div>
    </motion.div>
  );
};

export default ProjectDemo;
