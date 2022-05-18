import React from "react";
import "./youtube.css";

const Youtube = () => {
  return (
    <>
      <div
        className="dvYouTube"
        style={{
          background: `url(https://static.wixstatic.com/media/2c0034_fc43f01850924a8e9cf5695d060ff42f~mv2.png)`,
        }}
      >
        <div className="opacity">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="heading-md mb-3">Only Juice Nothing Else</h2>
                <p className="mb-3">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual.In publishing and
                  graphic design, Lorem ipsum is a placeholder text commonly
                  used to demonstrate the visual.
                </p>
                <a href="#">
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
