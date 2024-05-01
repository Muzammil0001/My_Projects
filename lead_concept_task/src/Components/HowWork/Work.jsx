import React from "react";
import "./work.css";
import cards from "./cardData.json";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Work = () => {
  return (
    <>
      <div className="p-0 m-0 container-fluid col-12 work_main w-100 d-flex justify-content-center align-items-center">
        <div className="sub_work_main text-center d-flex flex-column align-items-center justify-content-center">
          <div className="first_heading d-flex align-items-center gap-2">
            <div className="side_line d-flex flex-column">
              <div className="side_line1"></div>
              <div className="side_line2"></div>
            </div>
            <h3>Lorem Ipsum</h3>
          </div>
          <div className="second_heading py-2">
            <h2 className=" text-uppercase ">How we work</h2>
          </div>

          <div className="col-12 cards d-flex flex-column flex-lg-row gap-3">
            {cards.map((data) => {
              return (
                <div key={data.id} className="card">
                  <div>
                    <img
                      className="card_icon"
                      src={data.image}
                      alt={data.heading}
                    />{" "}
                  </div>
                  <h4>{data.heading} </h4>
                  <p>{data.discription}</p>

                  <div className="text-start px-2 d-flex justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <IoMdCheckmarkCircleOutline />
                        <span>{data.check1} </span>{" "}
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <IoMdCheckmarkCircleOutline />
                        <span>{data.check2} </span>{" "}
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <IoMdCheckmarkCircleOutline />
                        <span>{data.check3} </span>{" "}
                      </div>
                    </div>
                    <div>
                      <h1>{data.id}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
