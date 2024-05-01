import React from "react";
import "./events.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import cardData from "./EventsData.json";

const Events = () => {
  const options = {
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
    navClass: ["custom-nav-prev", "custom-nav-next"],
    nav: true,
    dots: false,
    // dotClass: 'custom-dot',
    responsive: {
      1100: {
        items: 3,
        margin: 10,
      },
      992: {
        items: 2,
        margin: 3,
      },
      768: {
        items: 3,
        margin: 3,
      },
      500: {
        items: 2,
        margin: 2,
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
      <div className="events_main  d-flex justify-content-center align-items-center py-4 py-lg-0">
        <div className="sub_events_main col-12 col-lg-10 d-flex flex-column flex-lg-row align-items-center">
          <div className="events_left_side pb-0 pb-lg-4 col-lg-4 col-12 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
            <div className="first_heading d-flex align-items-center gap-2">
              <div className="side_line d-flex flex-column">
                <div className="side_line1"></div>
                <div className="side_line2"></div>
              </div>
              <h4>Events</h4>
            </div>
            <h3 className="text-uppercase">Upcoming Events</h3>
            <p className="px-lg-0 px-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>

          <div className="events_right_side col-lg-8 col-12">
            <div className="d-flex justify-content-center align-items-md-center h-100">
              <OwlCarousel
                className="owl-theme"
                {...options}
                mouseDrag
                pullDrag
              >
                {cardData.map((data) => {
                  return (
                    <>
                      <div class="items" key={data.id}>
                        <div class="card">
                          <div className="eventDay text-uppercase">
                            {data.event_date}
                            <br />
                            {data.event_month}
                          </div>
                          <img
                            src={data.image}
                            class="card-img-top"
                            alt={data.title}
                          />
                          <div class="card-body">
                            <h5 class="card-title text-uppercase text-center">
                              {data.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
