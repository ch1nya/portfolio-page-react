import React from "react";
import { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import logo from '../images/logoSign.png'
import {SiMinutemailer} from "react-icons/si";

const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  const showMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  const navigate = useNavigate('/')

  const handleLogoClick= () =>{
    navigate('/')
  }
  return (
    <nav className={navbarblur ? "Navbar blur" : "Navbar"}>
      <a
        title="Reload"
        onClick={() =>handleLogoClick()}
        className="Logo"
      >
        <img src={logo} style={{width:"4rem"}}></img>
        {/*//TODO replace with real pic*/}
      </a>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Project">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/Contact">
            <SiMinutemailer />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
