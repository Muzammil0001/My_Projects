import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Work from "./Components/HowWork/Work";
import BannerSec from "./Components/BannerSec/BannerSec";
import Segments from "./Components/Segments/Segment";
import Articals from "./Components/Articals/Articals";
import Events from "./Components/Events/Events";
import Newsletter from "./Components/NewsLetter/Newsletter";
import Footer from "./Components/Footer/Footer"
import Bottombar from './Components/Bottombar/Bottombar';

function App() {
  return (
    <div className="App">
      <Topbar /> 
      <Navbar />
      <Header />
      <About />
      <Work />
      <BannerSec />
      <Segments /> 
      <Articals /> 
      <Events />
      <Footer/>
      <Bottombar/>
     
    </div>
  );
}

export default App;
