import React from "react";
import HeroImage from "../../../assets/hajj1.jpg";
import HeroImage1 from "../../../assets/mina.webp";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import "react-awesome-slider/dist/styles.css";

const HeroSection = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
   
      <AutoplaySlider play={true}  className="h-[90vh]">
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${HeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment:"fixed"
          }}
          className="w-[100%] h-[100vh] my-10 flex flex-col justify-center "
        >
          <div className="text-white md:w-[70%] w-[95%] m-auto text-center space-y-3">
            <h1 className="md:text-5xl text-3xl">
              "HajjWay Embarking on a Spiritual Voyage"
            </h1>
            <h1 className="md:text-xl md:leading-8  w-[80%] m-auto">
              "At HajjWay, we pave the way for your spiritual voyage to Hajj,
              providing pilgrims with the tools and resources needed to navigate
              this sacred journey with ease. With a blend of tradition and
              modernity, we ensure that every pilgrim's experience is marked by
              reverence, reflection, and profound spiritual growth."
            </h1>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${HeroImage1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-[100%] h-[100vh] my-10 flex flex-col justify-center "
        >
          <div className="text-white md:w-[70%] w-[95%] m-auto text-center space-y-3">
            <h1 className="md:text-5xl text-3xl">
              "HajjWay Embarking on a Spiritual Voyage"
            </h1>
            <h1 className="md:text-xl md:leading-8  w-[80%] m-auto">
              "At HajjWay, we pave the way for your spiritual voyage to Hajj,
              providing pilgrims with the tools and resources needed to navigate
              this sacred journey with ease. With a blend of tradition and
              modernity, we ensure that every pilgrim's experience is marked by
              reverence, reflection, and profound spiritual growth."
            </h1>
          </div>
            
        </div>
     
      </AutoplaySlider>
   
  );
};

export default HeroSection;
