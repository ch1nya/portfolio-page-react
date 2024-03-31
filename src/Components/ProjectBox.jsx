import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import inProgress from "../images/in progress.png";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    ColourPaletteDesc:
      "Generate random colours that you can use as a palette in your projects",
    ColourPaletteGithub: "https://github.com/ch1nya/Color_palette_generator",
    ColourPaletteWebsite: "https://ch1nya.github.io/Color_palette_generator/",

    ProjectsInProgressDesc:
        "Other projects are going to uploaded soon",
    ProjectsInProgressGithub: "https://github.com/ch1nya",
    ProjectsInProgressWebsite: "https://ch1nya.github.io",

    QrCodeGeneratorDesc:
        "Put your link and get a QR code",
    QrCodeGeneratorGithub: "https://github.com/ch1nya/qr_code_generator_react",
    QrCodeGeneratorWebsite: "https://ch1nya.github.io/qr_code_generator_react",

    AiAssistantDesc:
        "Connect your ChatGPT key and use your and assistant that responds with  short and straight-to-the-point responses",
    AiAssistantGithub: "https://github.com/ch1nya/ai-assitant",
    AiAssistantWebsite: "https://ch1nya.github.io/ai-assitant/",
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
