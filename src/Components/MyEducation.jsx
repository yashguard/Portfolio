import React from "react";

const MyEducation = (props) => {
  let { year, board, place, description } = props;
  return (
    <div className="education-list">
      <span>{year}</span>
      <h5>{board}</h5>
      <h6>{place}</h6>
      <p>{description}</p>
    </div>
  );
};

export default MyEducation;
