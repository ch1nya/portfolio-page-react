import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/MainPagePic.png";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'm <b>Chiniakin Ivan</b>
          </h1>
          <Type />
          <div className='HomeButtons'>
            <Link to="/About">
              <button>
                About Me
              </button>
            </Link>
            <Link to="/Contact">
              <button>
                Contact
              </button>
            </Link>
          </div>

        </div>
        <Tilt tiltMaxAngleX='5' tiltMaxAngleY='15'>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
