import React from "react";
import companypic1 from "../../assets/company1.png";
import companypic2 from "../../assets/company2.png";
import companypic3 from "../../assets/company3.png";
import companypic4 from "../../assets/company4.png";
import person from "../../assets/person.png";
import Slider from "./Slider";
import sliderData from "../../sliderData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <div className="w-[100%] h-auto bg-[#EAEFFF] p-5" id="testimonial">
      <div className="xl:w-[84.72%] md:w-[90%] mx-auto  md:flex justify-between">
        <div className="md:w-[46.14%] h-auto  flex flex-col justify-around">
          <div className="">
            <span className="font-Poppins text-[17px] text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
              Our Reviews
            </span>
            <h1 className="xl:text-5xl lg:text-4xl md:text-4xl  font-[600] font-poppins">
              Client Testimonials
            </h1>
            <p className="font-poppins font-[300] text-[16px]   text-[#000000] lg:leading-[34px] md:leading-[25px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className=" h-[147px] ">
            <h1 className="text-[#877A7A] font-poppins text-[30px] font-[600]">
              Clients & Partners
            </h1>
            <div className="flex justify-evenly items-center w-[95%] h-[90px]">
              <div className="animated-image">
                <img width={81} height={81} src={companypic1} />
              </div>
              <div className="animated-image">
                <img width={101} height={72} src={companypic2} />
              </div>
              <div className="animated-image">
                {" "}
                <img width={105} height={36} src={companypic3} />
              </div>
              <div className="animated-image">
                <img width={102} height={102} src={companypic4} />
              </div>
            </div>
          </div>
        </div>
        <Slider slides={sliderData} />
      </div>
    </div>
  );
};

export default Testimonials;
