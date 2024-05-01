import React, { useEffect } from "react";
import pic1 from "../../assets/about1.png";
import pic2 from "../../assets/about2.png";
import pic3 from "../../assets/about3.png";
import pic4 from "../../assets/about4.png";


const About = () => {
 
  const arr = [
    {
      pic: pic1,
      title: "Projects",
      range: "100+",
    },
    {
      pic: pic2,
      title: "Clients",
      range: "300+",
    },
    {
      pic: pic3,
      title: "Success",
      range: "98%",
    },
    {
      pic: pic4,
      title: "Years",
      range: "8+",
    },
  ];

  return (
    <div className="bg-[#EAEFFF] py-10" id="about">
      <div className="lg:w-[84.5%] w-[90%] h-auto mx-auto md:flex justify-between caret-transparent space-y-10">
        <div className="md:w-[50.4%]">
          <span className="font-Poppins text-[17px] text-[#4159A7] font-[500] border-b-[3px] border-[#4159A7] ">
            Who We Are?
          </span>
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl  font-[600] font-poppins my-3">
            Top-rated Web & Mobile App Development Company
          </h1>
          <p className="font-poppins font-[300] text-[16px] w-[98.3%] text-[#000000] lg:leading-[34px] md:leading-[25px] ">
            Prodigia is at the forefront of the digital revolution, transforming
            the way businesses interact with technology. Founded [Insert Year],
            we've grown into a beacon of innovation in software development,
            mobile application design, web development, and pioneering Web 3.0
            services. Our team is composed of visionary thinkers, expert
            developers, and creative problem-solvers dedicated to pushing the
            boundaries of what's possible.
          </p>
          
        </div>
        <div className="lg:w-[43.5%] md:w-[50%]">
          <div className="flex flex-wrap justify-center xl:gap-5 gap-3">
            {arr.map((data, index) => {
              return (
                <div
                  key={index}
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="700"
                  style={{ boxShadow: "0px 4px 8px 0px #4159A761" }}
                  className={`sm:w-[47.8%] md:h-[196px] h-auto rounded-sm p-5 bg-white ${
                    index === 2 || index === 0 ? "md:-mt-7" : "mt-0"
                  }`}
                >
                  <div className="flex">
                    <div>
                      <img src={data.pic} width={67} height={62} />
                    </div>
                    <div className="ml-3">
                      <h1 className="font-poppins text-[#4159A7] lg:text-2xl md:text-xl font-[600]">
                        {data.title}
                      </h1>
                      <h1 className="font-poppins lg:text-base md:text-lg font-[600]">
                        {data.range}
                      </h1>
                    </div>
                  </div>

                  <p className="font-poppins lg:text-[13px] md:text-[12px] w-[90%] font-[300] lg:leading-6 mt-2">
                    Prodigi Delivered the Thousands of Successful projects
                    around the world.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
