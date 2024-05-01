import React, { useState } from "react";
import {data} from "../../screen/Data"
import { useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // This enables smooth scrolling
  });
};
  // its my footer
  return (
    <div>
      <div className="w-[100%] h-auto border bg-[#666F7C] pb-[3rem] ">
        <div className="md:w-[85%] w-[90%] h-auto border-b-[1px] m-auto mt-10 flex flex-wrap justify-evenly pb-8 border-dotted">
          <div className="md:w-[25%] w-[50%] p-3 cursor-pointer ">
            <h1 className="font-bold text-white italic mb-2">Al-MUGHANI</h1>
            <h2 className="text-sm font-semibold text-white italic"  onClick={() => {navigate("/");scrollToTop()}}>Home</h2>
            <h2 className="text-sm font-semibold text-white italic"  onClick={() => {navigate("/aboutus");scrollToTop()}}>About Us</h2>
            <h2 className="text-sm font-semibold text-white italic"  onClick={() => {navigate("/contactus");scrollToTop()}}>
              Contact Us
            </h2>
            <h2 className="text-sm font-semibold text-white italic"  onClick={() => {navigate("/mora");scrollToTop()}}>Mora Registration</h2>
            <h2 className="text-sm font-semibold text-white italic"  onClick={() => {navigate("/secp");scrollToTop()}}>Secp Registration</h2>
           
          </div>

          <div className="md:w-[25%] w-[50%] p-3 ">
            <h1 className="font-bold text-white italic  mb-2">
              Conatct Us
            </h1>
            <h2 className="text-sm font-semibold text-white italic">
              OFFICE # 4, MAKKAH HEIGHTS, 11-ABBOTT ROAD, LAHORE
            </h2>
            <h2 className="text-sm font-semibold text-white italic">Events</h2>
            <h2 className="text-sm font-semibold text-white italic">
              TEL: 042-36283289
            </h2>
            <h2 className="text-sm font-semibold text-white italic">
              MOB: 0333-4239104
            </h2>
            
          </div>

          <div className="md:w-[50%] w-[100%] p-3 cursor-pointer ">
            <h1 className="font-bold text-white italic  mb-2">
              Constituent HGOS
            </h1>
            {data.map((data,index)=>{
              return(
                 <h2 className="text-sm font-semibold text-white italic" onClick={()=> {navigate(`/companyData/${index}`);scrollToTop()}}>
                  {data.HGOs}
            </h2>
              )
            })}
          </div>

         
        </div>
        <div className="w-[75%] m-auto py-2 text-right">
          <spam className="text-sm italic font-bold text-white">
            Al-MUGHANI MUNAZZAM PVT LIMITED
          </spam>
        </div>
      </div>
    </div>
  );
};

export default Footer;
