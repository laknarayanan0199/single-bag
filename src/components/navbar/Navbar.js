import React from "react";
import singleBag from "../../assests/banner/Singlebag-New-Logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={singleBag} alt="single-bag-logo" />
      </div>
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
          <a href="https://app.singlebag.com/store/register">Create Store</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
