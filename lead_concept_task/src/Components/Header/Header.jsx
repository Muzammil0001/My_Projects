import React from "react";
import "./header.css";
import { ReactTyped } from "react-typed";
const Header = () => {
  return (
    <>
      <div class=" header_sec video-container">
        <video id="bannerVideo" autoplay muted loop>
          <source src="/assets/banner_video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="overlay">
          <div class="over">
            <div class="content-sec">
              <div class="heading-div">
                <span class="heading-1">
                  CAPTURING
                  <br />
                  MOMENTS WITH
                  <ReactTyped
                    strings={[""]}
                    typeSpeed={100}
                    backSpeed={200}
                    loop
                  />
                </span>
                <br />
                <span class="heading-2">CAMspectrum</span>
                <br />
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Hello I Sapiente, perspiciatis nemo? Quae a fugiat, labore
                  velit eligendi, saepe deserunt laudantium alias tempore ha?
                </span>
                <br />
                <button class="btn btn-primary p-2 mt-3">Get a quote</button>
              </div>
            </div>
            <div class="other-sec">
              <button
                class="play-btn d-flex justify-content-center align-items-center"
                id="playBtn"
              >
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
