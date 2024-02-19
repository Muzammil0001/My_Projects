import React from "react";
import { GrTwitter } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>

      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_social">
        <a href="https://www.facebook.com/Malik.Muzamal.3551">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/mr_muzammilh/">
          <BsInstagram />
        </a>
        <a href="https://www.twitter.com">
          <GrTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
