import React, { useState } from "react";
import "./navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="sub_navbar container-fluid">
          <div>
            <a className="" href="#">
              <img
                className="logo_img"
                src="assets/images/Asset 1 1.png"
                alt="logo"
              />
            </a>
          </div>
          <button
            class="navbar-toggler border-0"
            onClick={() => setToggle(!toggle)}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggle ? <IoMenu /> : <IoClose />}
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 p-0 m-0 my-lg-0 navbar-nav-scroll gap-1 gap-lg-2 gap-xl-4 d-block px-3 px-lg-0 d-lg-flex align-items-center ">
              <li class="nav-item py-lg-0 py-1">
                <a href="#">Home</a>
              </li>
              <li class="nav-item  py-lg-0 py-1">
                <a href="#about">About</a>
              </li>
              <li class="nav-item  py-lg-0 py-1">
                <a href="">Sport</a>
              </li>
              <li class="nav-item  py-lg-0 py-1">
                <a href="">Entertainment</a>
              </li>
              <li class="nav-item  py-lg-0 py-1">
                <a href="">Landscape</a>
              </li>
              <li class="nav-item  py-lg-0 py-1">
                <a href="">Nature</a>
              </li>
              <li class="nav-item  py-lg-0 py-1">
                <a href="">Road Trip</a>
              </li>

              <button className="btn btn-primary  my-xl-0 my-2 w-auto w-lg-0 text-nowrap">
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      </nav>
      {
        // <nav className="navbar d-flex  justify-content-center align-items-center">
        // <div className="sub_navbar d-flex justify-content-between align-items-center col-md-10 col-12  p-0">
        // <div>
        // <a className="" href="#"><img className='logo_img' src="assets/images/Asset 1 1.png" alt="logo" /></a>
        // </div>
        // <div className="nav_links d-flex align-items-center gap-3">
        // <li><a href="">Home</a></li>
        // <li><a href="">About</a></li>
        // <li><a href="">Suport</a></li>
        // <li><a href="">Entertainment</a></li>
        // <li><a href="">Landscape</a></li>
        // <li><a href="">Nature</a></li>
        // <li><a href="">Road Trip</a></li>
        // <button className='btn btn-primary'>Contact US</button>
        // </div>
        // </div>
        // </nav>
      }
    </>
  );
};

export default Navbar;
