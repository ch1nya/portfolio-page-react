import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import inProgress from "../images/in progress.png";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    Colour_PaletteDesc:
      "This website lets you generate random colours that you can use as a palette in your projects",
    ColourPaletteGithub: "https://github.com/ch1nya/Color_palette_generator",
    ColourPaletteWebsite: "https://ch1nya.github.io/Color_palette_generator/",

    Projects_in_progressDesc:
        "Other projects are going to uploaded soon",
    inProgressGithub: "https://github.com/ch1nya",
    inProgressWebsite: "https://ch1nya.github.io",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
