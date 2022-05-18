import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="dvHeader">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4 d-lg-none">
              <div className="fabar">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>

            <div className="col-4 col-lg-1 text-center text-lg-left">
              <img
                src="https://static.wixstatic.com/media/2c0034_a27b95faba1d432fbddcf6ac4e9683ba~mv2.png"
                className="img-fluid"
              />
            </div>

            <div className="dvSlideMenu col-lg-10">
              <i className="btn-black closeBtn fa-solid fa-xmark btn d-lg-none"></i>
              <ul>
                <li>
                  <a className="active" href="">
                    home
                  </a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">login</a>
                </li>
                <li>
                  <a href="">sign up</a>
                </li>
              </ul>
            </div>

            <div className="col-4 col-lg-1 text-right">
              <a className="cart" href="#">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>0</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
