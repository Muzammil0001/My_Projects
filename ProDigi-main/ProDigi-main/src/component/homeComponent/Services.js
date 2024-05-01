import React, { useState ,useEffect } from "react";
import Aos from "aos";
import { Link ,useNavigate } from "react-router-dom";
import "../../../node_modules/aos/dist/aos.css"

import { serviceData } from "./serviseData";
import { Link as ScrollLink } from 'react-scroll';

const Services = () => {
   const navigate = useNavigate();
    useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <a name="services"></a>
      <div id="services" className="lg:w-[81.4%] w-[93%] mx-auto h-auto py-5">
        <div className="text-center xl:w-[48.99%] lg:w-[52%] w-[100%] mx-auto ">
          <span className="font-Poppins text-base text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
            Services Offer
          </span>
          <h1 className="font-[600] font-poppins md:text-[42px] sm:text-[35px] text-[30px]">
            What Services Include
          </h1>
          <p className="font-poppins  text-[#000000] text-[16px] md:leading-9">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>

        <div className="flex flex-wrap lg:justify-between justify-evenly mt-5">
          {serviceData?.map((data, index) => {
          
            return (
              <div
             data-aos="zoom-in-down"
                className={`lg:w-[32.1%] md:w-[40%] bg-[#F5F5F5] transition-transform duration-400 ease-in-out  hover:scale-105  h-auto shadow-md rounded-lg my-7 hover:bg-[#4159A7] hover:text-white
              } `}
              >
                <div
                  style={{ boxShadow: "0px 4px 8px 0px #4159A761" }}
                  className="w-[80px] h-[80px] bg-[#FFFFFF] -mt-[2rem] ml-[2rem]  shadow-inner rounded-lg flex items-center justify-center text-center"
                >
                  <img
                    src={data.pic}
                    alt="Your Image"
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h1 className="font-poppins text-2xl font-[600] ">
                    {data.title}
                  </h1>
                  <p className="font-poppins font-[275] text-base leading-7 ">
                    {data.des.slice(0,180)} ........
                  </p>
                  <div className="text-right">
                    <button onClick={()=>navigate(`/service/${data.title}`)} className="bg-gradient-to-r from-[#4159A7] to-[#2C2D6E] font-poppins font-[600] text-sm px-4 py-2 text-[#FFFFFF] rounded-full">
                      Read More 
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center my-3">
          <ScrollLink  to="getQoute" smooth={true} duration={500} className=" cursor-pointer bg-gradient-to-r from-[#4159A7] to-[#2C2D6E] font-poppins font-[600] text-base px-6 py-3 text-[#FFFFFF] rounded-full">
            Request Quote
          </ScrollLink>
        </div>
      </div>
    </>
  );
};
export default Services;
