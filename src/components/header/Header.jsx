import React from "react";
import "./header.css";

const Header = () => {
  // const getmenuBtn = document.getElementById("menuBtn");
  // console.log(getmenuBtn);
  console.log("component rendered");

  return (
    <>
      <div className="dvSlideMenu d-lg-none">
        <div className="closeBtn">
          <i className="fa-solid fa-xmark btn btn-black"></i>
        </div>
        <ul className="menu">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Signup</a>
          </li>
        </ul>
      </div>
      <div className="dvHeader py-1">
        <div className="container">
          <div className="row justify-content-between align-items-center justify-content-lg-start">
            <div className="menuBtn d-lg-none" id="menuBtn">
              <i className="fa fa-bars btn"></i>
            </div>
            <div className="logo">
              <img
                width={50}
                src="https://static.wixstatic.com/media/96a323_4f34d0bdaa984a9f9db0eff2a0f9c25a~mv2.png"
                alt=""
              />
            </div>
            <div className="menu ml-lg-3 d-none d-lg-block">
              <ul className="d-flex">
                <li>
                  <a href="">Home</a>
                </li>
                <li className="drop">
                  <a href="">Shop</a>
                  <ul className="dropdown">
                    <li>
                      <a href="">demo</a>
                    </li>
                    <li>
                      <a href="">demo</a>
                    </li>
                    <li>
                      <a href="">demo</a>
                    </li>
                    <li>
                      <a href="">demo</a>
                    </li>
                    <li>
                      <a href="">demo</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Signup</a>
                </li>
              </ul>
            </div>
            <div className="ml-lg-auto">
              <i className="fa fa-shopping-cart btn">123</i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
