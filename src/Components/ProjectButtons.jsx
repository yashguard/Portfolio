import React, { useState } from 'react'

const ProjectButtons = () => {
    let [activeLink,setActiveLink] = useState("All");
    
  return (
    <div className='project-buttons row justify-content-between'>
      <button className={`${activeLink === "All" ? "active" : ""}`} onClick={(e) => setActiveLink(e.target.innerHTML)}>All</button>
      <button className={activeLink === "CSS" ? "active" : ""} onClick={(e) => setActiveLink(e.target.innerHTML)}>CSS</button>
      <button className={activeLink === "SASS" ? "active" : ""} onClick={(e) => setActiveLink(e.target.innerHTML)}>SASS</button>
      <button className={activeLink === "BOOTSTRAP" ? "active" : ""} onClick={(e) => setActiveLink(e.target.innerHTML)}>BOOTSTRAP</button>
      <button className={activeLink === "REACT JS" ? "active" : ""} onClick={(e) => setActiveLink(e.target.innerHTML)}>REACT JS</button>
    </div>
  )
}

export default ProjectButtons
