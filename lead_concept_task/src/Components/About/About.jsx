import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="main_about_sec" id="about">
        <div className="d-flex justify-content-center">
          <div className="col-md-11 col-12 col-xxl-10 row ">
            <div className="left_sec col-12 col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-start ">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start  m-0 p-0">
                <div className="img_frame"></div>
                <img src="assets/images/Rec_camera 2.png" alt="About_img" />
              </div>
            </div>
            <div className="right_sec col-12 col-xl-6 d-flex flex-column justify-content-center align-items-center align-items-xl-start  p-0">
              <div className="first_heading d-flex align-items-center gap-2 pt-5 pt-xl-0 ">
                <div className="side_line d-flex flex-column">
                  <div className="side_line1"></div>
                  <div className="side_line2"></div>
                </div>
                <h3>About CAMspectrum</h3>
              </div>

              <div className="second_heading py-1">
                <h1 className=" text-uppercase ">We are creatives</h1>
              </div>
              <p className="px-2 px-xl-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled.
              </p>

              <p className="px-2 px-xl-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="w-100 px-2 px-xl-0 pb-2">
                <button className="btn btn-primary ">Read More</button>
              </div>
            </div>
          </div>
        </div>

        {
          //   <div className="col-10 col-lg-10 d-flex flex-lg-row flex-column align-items-center  justify-content-center">
          //   <div className="col-md-12 col-12 left_sec_about p-0 d-flex justify-content-center align-content-center ">
          //     <div className="d-flex align-items-center ">
          //       <div className="img_frame"></div>
          //       <img src="assets/images/Rec_camera 2.png" alt="About_img" />
          //     </div>
          //   </div>
          // </div>
          // <div className="col-md-6 col-12 right_sec_about d-flex align-items-center  p-0">
          //     <div className="sub_right_sec text-justify">
          //       <div className="first_heading d-flex align-items-center gap-2 ">
          //         <div className="side_line d-flex flex-column">
          //           <div className="side_line1"></div>
          //           <div className="side_line2"></div>
          //         </div>
          //         <h3>About CAMspectrum</h3>
          //       </div>
          //       <div className="second_heading py-1">
          //         <h1 className=" text-uppercase ">We are creatives</h1>
          //       </div>
          //       <p className="">
          //         Lorem Ipsum is simply dummy text of the printing and typesetting
          //         industry. Lorem Ipsum has been the industry's standard dummy
          //         text ever since the 1500s, when an unknown printer took a galley
          //         of type and scrambled.
          //       </p>
          //       <p>
          //         Lorem Ipsum is simply dummy text of the printing and typesetting
          //         industry. Lorem Ipsum has been the industry's standard dummy
          //         text ever since the 1500s, when an unknown printer took a galley
          //         of type and scrambled it to make a type specimen book.Lorem
          //         Ipsum is simply dummy text of the printing and typesetting
          //         industry. Lorem Ipsum has been the industry's standard dummy
          //         text ever since the 1500s.Lorem Ipsum has been the industry's
          //         standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's
          //         standard dummy text ever since the 1500s.
          //       </p>
          //       <button className="btn btn-primary">Read More</button>
          //     </div>
          //   </div>
        }
      </div>
    </>
  );
};

export default About;
