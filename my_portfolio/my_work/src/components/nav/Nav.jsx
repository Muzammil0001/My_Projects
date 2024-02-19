import React, { useState } from 'react';
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import{ BiMessageSquareDetail} from "react-icons/bi";
import "./nav.css"; 

const Nav = () => {
  const [Active,setActive]=useState("#");
 
  return (
    <nav>
    <a href='#' className={Active==="#"? "active":""} onClick={()=>{setActive("#")}}><AiOutlineHome/></a>
    <a href='#about' className={Active==="#about"? "active":""} onClick={()=>{setActive("#about")}}><AiOutlineUser/></a>
    <a href='#experience' className={Active==="#experience"? "active":""} onClick={()=>{setActive("#experience")}}><BiBook/></a>
    <a href='#services' className={Active==="services"? "active":""} onClick={()=>{setActive("services")}}><RiServiceLine/></a>
    <a href='#contact' className={Active==="#contact"? "active":""} onClick={()=>{setActive("#contact")}}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav;