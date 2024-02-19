import React from "react";
import CTA from "./CTA";
import Pic from "../../assets/Me.png";
import HeaderSocial from "./HeaderSocial";
import "./header.css"; 

const Header= () => 
{
    return(
        <header>
        <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Muzamal Hussain</h1>
        <h5 className="text_light">Front End Developer</h5>
        <CTA />
        <div className="me">
        <img src={Pic} alt="me" />
        </div>
        <HeaderSocial/>
        <a href="#contact" className="scroll_down">Scroll Down</a>


        </div>
        </header>
    );
}
export default Header;