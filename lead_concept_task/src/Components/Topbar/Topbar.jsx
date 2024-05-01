import React from "react";
import "./topbar.css";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Topbar = () => {
  return (
    <>
      <div className="topbar_main d-flex  justify-content-center   align-items-center">
        <div className="sub-topbar col-md-10 col-12 d-flex  justify-content-between align-items-center px-2 px-md-0">
          <div className="left_contact d-flex align-items-center flex-wrap">
            <div className="me-sm-3 me-2 ">
              {" "}
              <MdEmail />
              <span> example@xyz.com</span>
            </div>
            <div className="me-sm-3 me-2 ">
              <FaPhoneAlt />
              <span> 123-00002222</span>
            </div>
          </div>

          <div className="right_contact d-flex align-items-center">
            <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap ms-sm-3 ms-2">
              <FaFacebookF />
            </div>
            <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap ms-sm-3 ms-2">
              <FaTwitter />
            </div>
            <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap ms-sm-3 ms-2">
              <FaInstagram />
            </div>
            <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap ms-sm-3 ms-2">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
