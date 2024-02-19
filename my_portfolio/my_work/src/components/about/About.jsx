import React from 'react'
import Pic from "../../assets/I.png";
import {FaAward} from "react-icons/fa"; 
import {AiOutlineUsergroupAdd} from "react-icons/ai"; 
import {AiTwotoneFolderOpen} from "react-icons/ai"; 
import "./about.css";


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='.container about_container'>
    <div className='about_me'>
    <div className='about_me_img'>
    <img src={Pic} alt='About Me' />
    </div>
    </div>


    <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Expierence</h5>
                <small>2+ years</small>
         </article>

         <article className='about_card'>
                <AiOutlineUsergroupAdd className='about_icon'/>
                <h5>Expierence</h5>
                <small>2+ years</small>
         </article>

         <article className='about_card'>
                <AiTwotoneFolderOpen className='about_icon'/>
                <h5>Expierence</h5>
                <small>2+ years</small>
         </article></div>
         
         <p>Laboris sit reprehenderit laborum anim labore duis pariatur ipsum esse non ea excepteur qui.
          Adipisicing esse eu occaecat labore ipsum dolor adipisicing adipisicing qui cupidatat consectetur
           occaecat officia. Aliqua occaecat cupidatat sint officia quis id nisi.</p>
         
          <a href='#about' className='btn btn-primary'>About Me</a>
        </div>
    </div>

    

    </section>
  )
}

export default About;