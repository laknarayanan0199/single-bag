import React from "react";
import logo from "../../assests/banner/Singlebag-New-Logo.png";

import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="about">
          <img src={logo} alt="Single-Bag" />
          <p>
            Singlebag is an efficient and user-friendly eCommerce platform that
            provides you with all advanced facilities and powerful tools to
            start your online store without any coding knowledge. Whether you
            are a start-up or an established business, Singlebag is an
            all-in-one e-commerce platform that helps to stabilize and
            accelerate your online business.
            <br />
            <b>We help in making your dream of business a reality.</b>
          </p>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
        <div className="community">
          <div>
            <h3>COMMUNITY</h3>
            <p>Forums</p>
            <p>Blogs</p>
            <p>Academy</p>
            <p>knowledgebase</p>
          </div>
          <div>
            <h3>COMPANY</h3>
            <p>About us</p>
            <p>Partner Program</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Get in touch</p>
          </div>
          <div>
            <h3>POLICY</h3>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyrights">
        © 2023 | Singlebag An Orange Holdings Company | All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
