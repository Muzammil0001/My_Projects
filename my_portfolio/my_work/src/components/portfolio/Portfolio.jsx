import React from 'react'
import img1 from "../../assets/p1.png";
import img2 from "../../assets/p2.png";
import img3 from "../../assets/p3.png";
import "./portfolio.css";


const data=[
  {
    id:1,
    title:"This is portfolio item title",
    img: img1,
    github:'https://github.com',
    demo:'https://github.com'

  },
  {
    id:2,
    title:"This is portfolio item title",
    img: img2,
    github:'https://github.com',
    demo:'https://github.com'

   }  ,
  {
    id:     3,
    title:  "This is portfolio item title",
    img:    img3,
    github: 'https://github.com',
    demo:   'https://github.com'

  }

];

const Portfolio = () => {
  return (
    
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
 
    <div className='container p_container'>
    
    { 
       data.map((val)=>{ 
    return(
    <article key={val.id} className='p_items'>
    <div className='p_item_img'>
    <img src={val.img} alt={val.title}></img>
    </div>
    <h3>{val.title}</h3>
    <div className='p_item_cta'>
    <a href={val.github} className='btn'>Github</a>
    <a href={val.img} className='btn btn-primary'>Live Demo</a>
    </div>
    </article>)
     })
     
    }
    
    </div>
    
    </section>

  )
}

export default Portfolio;