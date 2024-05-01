import React, { useEffect } from "react";
import HeroSection from "../components/home/herosection/HeroSection";

import OnlineCards from "../components/home/onlineCards/OnlineCards";
import ProfileCards from "../components/home/profileCards/ProfileCards";
import GallaryCards from "../components/home/gallaryCards/GallaryCards";
import FooterGallary from "../components/home/footerGallary/FooterGallary";
import audio from "../assets/audio.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Home = () => {
  // debugger;
  
  return (
    <div>
      <HeroSection />
      <div className="invisible">
      <AudioPlayer
        autoPlay
        src={audio}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
      </div>

      <ProfileCards />
      <GallaryCards />
      <FooterGallary />
    </div>
  );
};

export default Home;
