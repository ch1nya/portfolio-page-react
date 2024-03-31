import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Who <b>I</b> am
          </h1>
          <p>
            My name is <b>Chiniakin Ivan</b> and I am a <b>Front-end developer</b> from Saint-Petersburg (Russia).
            I love to create projects with <b>minimalistic</b> designs and put my own
            twists on it, you may check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations where I can
            contribute. Feel free to connect with me, all links are below in the
            footer.
            <br />
          </p>
          <a href="https://shorturl.at/ajFK3" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skills</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
        <Skills skill="AntDesign" />
        <Skills skill="TypeScript" />
      </div>
    </>
  );
};

export default About;
