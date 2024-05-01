import React from "react";
import heropic from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="w-[84%]  mx-auto md:flex justify-between  caret-transparent">
      <div className="md:w-[47.5%] md:py-10">
        <span className="font-Poppins text-[17px] text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
          Future With Prodigia
        </span>
        <h1 className="xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl  font-[600] font-poppins">
          The Future of Digital Innovation Unfolds
        </h1>
        <p className="font-poppins font-[300] sm:text-lg sm:w-[90%] text-[#000000] lg:leading-[37px] md:leading-[25px] ">
          Prodigia solve the world's biggest problems with expertise. Prodigia
          helps global brand with digital products on web, mobile and connected
          platforms.
        </p>
        <button style={{ borderRadius: '60px' , padding: '16px 26px' }}
          type="button"
          className="flex mt-6 items-center md:py-4 md:px-5 text-[#4159A7] font-Poppins border border-gray-800 rounded-[50px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Let’s Talk</span>
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            {" "}
            {/* Added ml-2 class for left margin */}
            <path
              d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z"
              fill="#4159A7"
            />
          </svg>
        </button>
      </div>
      <div  className="md:w-[39.5%] w-[50%] mx-auto">
        <img src={heropic}  />
      </div>
    </div>
  );
};

export default HeroSection;
