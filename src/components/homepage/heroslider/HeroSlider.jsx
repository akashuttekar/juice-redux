import React from "react";
import "./heroslider.css";

const Heroslider = () => {
  return (
    <div>
      <div className="heroslider">
        <div className="container">
          <div className="row align-items-center h-100vh">
            <div className="col-md-5 slider-img text-center">
              <img
                src="https://static.wixstatic.com/media/2c0034_5916d66c114c4a3fb055fd0fff15f402~mv2.png"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 slider-text text-center text-md-left">
              <h1 className="heading-lg mb-3">Valencia Orange</h1>
              <p className="mb-3">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual.
              </p>
              <a href="" className="btn btn-black">
                shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroslider;
