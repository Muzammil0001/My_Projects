import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./artical.css";
import data from "./articalData.json";
import { FaArrowRight } from "react-icons/fa6";
const Articals = () => {
  const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    navClass: ["custom-nav-prev", "custom-nav-next"],
    nav: true,
    dots: true,

    // dotClass: 'custom-dot',
    responsive: {
      1100: {
        items: 3,
        margin: 10,
      },
      992: {
        items: 2,
        margin: 7,
      },
      576: {
        items: 2,
        margin: 3,
      },
      320: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };
  return (
    <>
      <div className="col-12 artical_main" id="articals">
        <div className="col-10  ">
          <div className="artical_headings pb-lg-4  d-flex flex-column align-items-center">
            <div className="first_heading d-flex align-items-center gap-2">
              <div className="side_line d-flex flex-column">
                <div className="side_line1"></div>
                <div className="side_line2"></div>
              </div>
              <h4>Lorem Ipsum</h4>
            </div>
            <h3 className="text-uppercase ">Latest Articles</h3>
          </div>

          <div className=" cards_sec">
            <OwlCarousel className="owl-theme" {...options} mouseDrag pullDrag>
              {data.map((data) => {
                return (
                  <>
                    <div key={data.id} class="card p-lg-3 p-1 col-12 mt-lg-5 mt-2">
                      <img
                        class="slider-img img-fluid"
                        src={data.image}
                        alt="Card_img"
                      />
                      <div class="card-body p-2">
                        <div class="d-flex justify-content-between">
                          <p class="p-0 m-0 text-primary fw-bold">
                            {data.name}
                          </p>
                          <p class="fw-bold">{data.number}</p>
                        </div>
                        <h4 class="py-1 text-primary fw-bold ">{data.title}</h4>
                        <p className="text-justify">{data.description}</p>
                        <span class="text-primary fw-bold more_sec  py-0 py-3 ">
                          <a href="" className="pb-5 pb-lg-0">
                            Read More <FaArrowRight />
                          </a>{" "}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articals;
