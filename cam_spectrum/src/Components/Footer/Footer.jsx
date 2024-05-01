import React from "react";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import Newsletter from "../NewsLetter/Newsletter";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <div className="newsLetter_sec">
          <Newsletter />
        </div>
        <div className="sub_main_footer d-flex justify-content-center  w-100">
          <div className=" col-sm-10 col-12 px-5 px-lg-0 py-lg-5 py-2">
            <div className="row su_footer_sec">
              <div className="footer_sec1 col-lg-5 col-12 col-lg-6 col-xl-5 mb-5 mb-lg-0 p-0 m-0">
                <div className="py-3">
                  <a className="" href="#">
                    <img
                      className="logo_img"
                      src="assets/images/Asset 1 1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <p className="mb-4 ps-0 company_details">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Placeat laborum quod, quaerat unde distinctio sint? Lorem
                  ipsum, dolor sit amet consectetur adipisicing elit. Placeat
                  laborum quod, quaerat unde distinctio sint?
                </p>
                <div className="right_contact d-flex align-items-center gap-3">
                  <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap">
                    <FaFacebookF />
                  </div>
                  <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap">
                    <FaTwitter />
                  </div>
                  <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap">
                    <FaInstagram />
                  </div>
                  <div className="social_icon d-flex justify-content-center align-items-center flex-nowrap">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>

              <div className="footer_sec2 col-lg-2 col-12 col-lg-6 col-xl-2 mb-1 mb-lg-0 p-0 m-0">
                <h6 className="ms-lg-4 ms-2 pt-lg-3 pt-0 text-nowrap">
                  Customer Support
                </h6>

                <ul className=" link_widget p-0">
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Home
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> About Us
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Sports
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Entertainment
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Landscape
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Natural
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Road Trip
                  </li>
                </ul>
              </div>

              <div className="footer_sec3 col-lg-2 col-12 col-lg-6 col-xl-2 mb-1 mb-lg-0 p-0 m-0">
                <h6 className="ms-lg-4 ms-2 pt-lg-3 pt-0 text-nowrap ">
                  Quick Links
                </h6>

                <ul className="link_widget p-0 mt-4">
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Lorem ipsum
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Lorem ipsum
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Lorem ipsum
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Lorem ipsum
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaGreaterThan className="LinkIcon" /> Lorem ipsum
                  </li>
                </ul>
              </div>

              <div className="footer_sec4 col-lg-3 col-12 col-lg-6 col-xl-3 mb-1 mb-lg-0 p-0 m-0">
                <h6 className="ms-lg-4 ms-2  pt-3 text-nowrap">Contact Us</h6>
                <ul className="link_widget p-0">
                  <li className="ms-lg-4 ms-2">
                    <MdEmail className="LinkIcon" /> example@xyz.com
                  </li>
                  <li className="ms-lg-4 ms-2">
                    <FaPhoneAlt className="LinkIcon" /> +123-123-123
                  </li>
                  <li className="ms-lg-4 ms-2 text-nowrap">
                    <FaLocationDot className="LinkIcon" /> Lorem Ipsum Lorem
                    Ipsum{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
