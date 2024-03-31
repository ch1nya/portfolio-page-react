import React from "react";
import ProjectBox from "./ProjectBox";
import inProgress from "../images/in progress.png";
import PaletteImage from "../images/Pallett.png";
import QrCode from "../images/qrCode.png";


const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={PaletteImage} projectName="ColourPalette" />
          <ProjectBox projectPhoto={QrCode} projectName="QrCodeGenerator" />
          <ProjectBox projectPhoto={inProgress} projectName="ProjectsInProgress" />
        {/*<ProjectBox projectPhoto={ColourImage} projectName="ColourPalette" />*/}
      </div>
    </div>
  );
};

export default Projects;
