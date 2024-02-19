import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <>
      <div className='header_socials'>
        <a href='www.linkedin.com/in/muzamal-hussain-13684b278' target='_blank'><ImLinkedin /></a>
        <a href='https://www.facebook.com/Malik.Muzamal.3551' target='_blank'><BsFacebook /></a>
        <a href='https://github.com/Muzammil0001' target='_blank'><BsGithub /></a>

      </div>
    </>
  )
}

export default HeaderSocial;