import React from "react";
import {FaGithub, FaInstagram, FaTelegram} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer style={{height:"1.5rem", }}>
      <h4>Copyright &copy; {year} | All Rights Reserved</h4>
      <div className="footerLinks">
        <a style={{height:"3rem"}} href="https://github.com/ch1nya" target="_blank">
          <FaGithub />
        </a>
        {/*<a href="https://instagram.com/" target="_blank">*/}
        {/*<FaInstagram />*/}
        {/*</a>*/}
        {/*// TODO create my business insta later*/}
        <a href="mailTo:chiniakinivan@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://t.me/muzhchinya" target="_blank">
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
