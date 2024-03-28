import React from "react";
import ProjectBox from "./ProjectBox";
import inProgress from "../images/in progress.png";
import PaletteImage from "../images/Pallett.png";


const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={PaletteImage} projectName="Colour_Palette" />
        <ProjectBox projectPhoto={inProgress} projectName="Projects_in_progress" />
        {/*<ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />*/}
        {/*<ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />*/}
      </div>
    </div>
  );
};

export default Projects;
