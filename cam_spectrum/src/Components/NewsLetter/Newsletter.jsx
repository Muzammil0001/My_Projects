import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter_main d-flex justify-content-center">
        <img src="assets/images/newsletter_img.png" alt="" />
        <div className="sub_newsletter col-md-8 col-12 d-flex flex-column align-items-center py-md-4 py-1">
          <div className="first_heading d-flex align-items-center gap-2 ">
            <div className="side_line d-flex flex-column">
              <div className="side_line1"></div>
              <div className="side_line2"></div>
            </div>
            <h3>Our Newsletter</h3>
          </div>

          <div className="second_heading py-1">
            <h1 className=" text-uppercase ">subscribe our News letter</h1>
          </div>

          <div class="input-container">
            <input type="text" placeholder="Enter your text" />
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
