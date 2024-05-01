import React from "react";
import "./bannersec.css";

const BannerSec = () => {
  return (
    <div className="banner_sec container-fluid">
      <div className="row">
        <div className="left_side col-lg-6 col-12 order-1 order-lg-0 d-flex justify-content-center align-items-center p-lg-4 p-3 ">
          <div className="">
            <div className="first_heading d-flex align-items-center justify-content-center justify-content-lg-start  gap-2">
              <div className="side_line d-flex flex-column">
                <div className="side_line1"></div>
                <div className="side_line2"></div>
              </div>
              <h3 className="">Lorem Ipsum</h3>
            </div>
            <h2 className="text-uppercase">
              Lorem Ipsum is simply dummy text of the printing
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
              simply dummy text of the printingLorem Ipsum is simply dummy text
              of the printing. Lorem Ipsum is simply dummy text of the printing.
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <div>
              <button className="btn btn-outline-light">Read More</button>
            </div>
          </div>
        </div>

        <div className="right_side col-lg-6 col-12 order-0 order-lg-1 pb-4 pb-lg-0 p-0 m-0 ">
          <img className="" src="/assets/images/moreImge.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
