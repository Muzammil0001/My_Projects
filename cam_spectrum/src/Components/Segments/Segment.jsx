import React from "react";
import cardData from "./card.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./segment.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Segment = () => {
  const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    navClass: ["custom-nav-prev", "custom-nav-next"],
    nav: true,
    dots: false,
    // dotClass: 'custom-dot',
    responsive: {
      1100: {
        items: 3,
        stagePadding: 100,
        margin: 10,
      },
      724: {
        items: 2,
        stagePadding: 100,
        margin: 5,
      },
      500: {
        items: 2,
        stagePadding: 30,
        margin: 1,
      },
      320: {
        items: 1,
        margin: 0,
        stagePadding: 0,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  return (
    <div className="segment_main col-12 p-0 m-0">
      <div className="segment_main_headings">
        <div className="first_heading d-flex align-items-center gap-2">
          <div className="side_line d-flex flex-column">
            <div className="side_line1"></div>
            <div className="side_line2"></div>
          </div>
          <h3>Lorem Ipsum</h3>
        </div>
        <h2 className="text-uppercase">
          Lorem Ipsum is simply dummy text of the printing
        </h2>
      </div>
      <div className="back_div_rectangle"></div>

      <div className="segment_main_sub d-flex justify-content-center align-items-md-center h-100">
        <OwlCarousel
          className="owl-theme "
          stagePadding={100}
          {...options}
          mouseDrag
          pullDrag
        >
          {cardData.map((data) => {
            return (
              <>
                <div class="item" key={data.id}>
                  <div class="card my-2">
                    <img
                      src={data.image}
                      class="card-img-top"
                      alt={data.title}
                    />
                    <div class="card-body d-sm-flex  justify-content-between align-items-center p-lg-3 p-2">
                      <h5 class="card-title text-uppercase">{data.title}</h5>
                      <FaRegArrowAltCircleRight className=" arrow_icon" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Segment;
