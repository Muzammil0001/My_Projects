import React from "react";
import "./dashboard_pge.css";

const Dashboard_page = () => {
  return (
    <>
      <div className="container dashboard_page">
        <div className=" d_cards d-flex justify-content-center flex-wrap gap-3 ">
          <div className="d_card col-md-3 col-sm-2 col-12 d-flex justify-content-center align-items-center gap-4">
            <div className="d_card_icon">
              <i className="fa fa-shopping-bag"></i>
            </div>
            <div>
              <h5>New Oders</h5>
              <h3>2233</h3>
              <p>+30% (20 days)</p>
            </div>
          </div>
          <div className="d_card col-md-3 col-sm-2 col-12 d-flex justify-content-center align-items-center gap-4">
          <div className="d_card_icon">
            <i className="fa fa-usd"></i>
          </div>
          <div>
            <h5>New Oders</h5>
            <h3>2233</h3>
            <p>+30% (20 days)</p>
          </div>
        </div>
        <div className="d_card col-md-3 col-sm-2 col-12 d-flex justify-content-center align-items-center gap-4">
        <div className="d_card_icon">
          <i className="fa fa-user-plus"></i>
        </div>
        <div>
          <h5>New Users</h5>
          <h3>2233</h3>
          <p>+30% (20 days)</p>
        </div>
      </div>

      
        </div>

        <div className="progress_secs d-flex my-4 py-4 gap-3 justify-content-center">
        
        <div className="d_progress_sec col-md-7  bg-warning col-12 d-flex flex-column  justify-content-center align-items-center gap-4">
        <div className="py-3 ">
        <h5>Yearly Status</h5>
      </div>
        <div className="d_progress_img1 mb-3">
        <i class="fa fa-line-chart" aria-hidden="true"></i>
        </div>
        
        </div>

        <div className="d_progress_sec col-md-5 col-12 bg-warning  d-flex flex-column justify-content-center align-items-center gap-4">
        <div className="py-3 ">
        <h5>Yearly Status</h5>
      </div>
      <div className="d_progress_img1 mb-3">
        <i class="fa fa-signal" aria-hidden="true"></i>
        </div>
        </div>

        </div>

      </div>
    </>
  );
};

export default Dashboard_page;
