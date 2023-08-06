import React from 'react'

const MyExperience = (props) => {
    let { year, course, place, description } = props;
    return (
      <div className="experience-list">
        <span>{year}</span>
        <h5>{course}</h5>
        <h6>{place}</h6>
        <p>{description}</p>
      </div>
    );
}

export default MyExperience
