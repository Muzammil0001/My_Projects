import React ,{useEffect}from "react";
import contactpic from "../../assets/contact.png";
import Aos from "aos";
import {serviceData} from "./serviseData";

import "../../../node_modules/aos/dist/aos.css"
const Contact = () => {
   useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-[88.8%] py-6 mx-auto caret-transparent" id="getQoute">
      <div  className="text-center lg:w-[44%] sm:w-[70%] w-[90%]  mx-auto">
        <span className="font-Poppins text-[17px] text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
          Request a Qoute
        </span>
        <h1 className="font-[600] font-poppins md:text-[42px] text-[33px]">
          Let’s Get in Touch
        </h1>
        <p className="font-poppins  text-[#000000] text-[16px] md:leading-9">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>
      <div   className="mx-auto  md:flex justify-between my-4">
        <div  data-aos="fade-right"
     data-aos-offset="300" className="md:w-[46%]  bg-[#E8E8E8] rounded-lg py-4">
          <div className="flex flex-wrap justify-evenly xl:my-5 ">
            <div className="w-[43.12%] space-y-1">
              <label className="font-poppins font-[400] lg:text-base text-sm">
                Your Name *
              </label>
              <br></br>
              <input
                className="w-[100%] outline-none text-[#736666] placeholder-[#736666]  xl:py-4 md:py-2 py-1 px-4 rounded-full text-sm lg:text-base"
                placeholder="Add Your Name"
              />
            </div>

            <div className="w-[43.12%] space-y-1">
              <label className="font-poppins font-[400] lg:text-base text-sm">
                Email Adress *
              </label>
              <br></br>
              <input
                className="w-[100%] outline-none  text-[#736666] placeholder-[#736666] xl:py-4 md:py-2 py-1 px-4 rounded-full text-sm lg:text-base"
                placeholder="e.g talharhair@info.com"
              />
            </div>

            <div className="w-[43.12%] space-y-1">
              <label className="font-poppins font-[400] lg:text-base text-sm">
                Phone No *
              </label>
              <br></br>
              <input
                className="w-[100%] outline-none  text-[#736666] placeholder-[#736666]  xl:py-4 md:py-2 py-1 px-4 rounded-full text-sm lg:text-base"
                placeholder="e.g +40 737 135 676"
              />
            </div>

            <div className="w-[43.12%] space-y-1 relative">
              <label className="font-poppins font-[400] lg:text-base text-sm">
                Interested In *
              </label>
              <br />
              <select className="w-[100%] outline-none  text-[#736666] placeholder-[#736666] xl:py-4 md:py-2 py-1 px-4 rounded-full text-sm lg:text-base appearance-none">
                <option value="" disabled selected>
                  Select your option
                </option>
                {serviceData.map((data)=>{
                  return(
                    <option value="web-development">{data.title}</option>
                  )
                })}
               
                {/* Add more options as needed */}
              </select>
              <div className="absolute inset-y-0 top-6 right-5 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative w-[90%] space-y-1">
              <label className="font-poppins font-[400] lg:text-base text-sm">
                Message *
              </label>
              <textarea
                className="w-[100%] outline-none text-[#736666] placeholder-[#736666] md:py-4 py-2 px-4 rounded-md h-[190px] text-sm lg:text-base"
                placeholder="Describe Your Issue or Quotation"
              />
              <button className="absolute bottom-4 right-6 bg-gradient-to-r from-[#4159A7] to-[#2C2D6E] font-poppins font-[600] text-[12px] px-8 py-3 text-[#FFFFFF] rounded-full">
                Send Now
              </button>
            </div>
          </div>
        </div>
        <div 
        data-aos="zoom-in-down"
        className="w-[50.3%] flex  justify-center items-center">
          <img
            src={contactpic}
            className="lg:h-[auto] h-[330px] md:block hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
