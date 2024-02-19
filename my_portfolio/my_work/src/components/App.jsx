import React from "react";
import Header from "./header/Header";
import Experience from "./experience/Experience";
import Nav from "./nav/Nav";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact"; 
import Footer from "./footer/Footer";
import About from "./about/About"; 


const App= () => {
return(
    <>
    
    <Header/>  
    <Nav/>  
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
   <Footer/>


</>
);

}
export default App;