import React from 'react';
import "./experience.css";
import {BsShieldFillCheck} from "react-icons/bs";

const Expierence = () => {
  return (
    <section id="experience">
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container exp_container' >
    <div className='experience_forntend'>
    <h3>Frontend Development</h3>
    <div className='exp_content' >
    <article className='exp_details'>

    <BsShieldFillCheck className='exp_icons'/>
   <div> <h4>HTML</h4>
   <small className='text-light'>Experienced</small></div>
   </article>

   <article className='exp_details'>
   <BsShieldFillCheck className='exp_icons'/>
   <div> <h4>CSS</h4>
   <small className='text-light'>Experienced</small></div>
   </article>

   <article className='exp_details'>
   <BsShieldFillCheck className='exp_icons'/>
   <div> <h4>Bootstrap</h4>
   <small className='text-light'>Experienced</small></div>
   </article>


   <article className='exp_details'>
   <BsShieldFillCheck className='exp_icons'/>
   <div> <h4>React JS</h4>
   <small className='text-light'>Experienced</small></div>
   
    </article>
    </div>
    </div>


    <div className='experience_backend'>
    <h3>Frontend Development</h3>
    <div className='exp_content'>
    <article className='exp_details'>
    <BsShieldFillCheck className='exp_icons'/>
    <div> <h4>NodeJS</h4>
    <small className='text-light'>Experienced</small></div>
    </article>

    <article className='exp_details'>
    <BsShieldFillCheck className='exp_icons'/>
    <div> <h4>MongoDB</h4>
    <small className='text-light'>Experienced</small></div>
    </article>

    <article className='exp_details'>
    <BsShieldFillCheck className='exp_icons'/>
    <div> <h4>Express</h4>
    <small className='text-light'>Experienced</small></div>
    </article>

    <article className='exp_details'> 
    <BsShieldFillCheck className='exp_icons'/>
    <div> <h4>PHP</h4>
    <small className='text-light'>Experienced</small></div>
    </article>
    </div>
    </div>

    </div>
   
    </section>
  )
}

export default Expierence;