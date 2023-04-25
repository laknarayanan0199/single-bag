import React from "react";
import singleBag from "../../assests/banner/Singlebag-New-Logo.png";
import hamburger_icon from "../../assests/hamburger.png";
import close from "../../assests/close.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={singleBag} alt="single-bag-logo" />
        </div>
        <div className="menu_btn">
          <img
            src={hamburger_icon}
            alt=""
            onClick={() => setIsHamburger(!isHamburger)}
            className="options"
          />
          {isHamburger ? (
            <div className="mobile_navlinks">
              <img
                src={close}
                alt=""
                onClick={() => setIsHamburger(!isHamburger)}
                className="close options"
              />
              <a href="https://singlebag.com/seller/">Seller</a>
              <a href="https://singlebag.com/reseller/">Reseller</a>
              <a href="https://singlebag.com/supplier/">Supplier </a>
              <a href="https://singlebag.com/features/"> Features</a>
              <a href="https://singlebag.com/pricing>">Pricing </a>
            </div>
          ) : null}
          <div className="navlinks">
            <a href="https://singlebag.com/seller/">Seller</a>
            <a href="https://singlebag.com/reseller/">Reseller</a>
            <a href="https://singlebag.com/supplier/">Supplier </a>
            <a href="https://singlebag.com/features/"> Features</a>
            <a href="https://singlebag.com/pricing>">Pricing </a>
          </div>
          <div>
            <button className="login_btn">
              <a href="https://singlebag.com/pricing"> Login </a>
            </button>
            <button className="create_store_btn">
              <a href="https://app.singlebag.com/store/register">
                Create Store
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
