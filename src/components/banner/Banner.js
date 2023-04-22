import React from "react";
import "./banner.css";
import homePageBanner from "../../assests/banner/Singlebag-Homepage-banner.png";
import { BsArrowRight } from "react-icons/bs";
import round from "../../assests/banner/round_symbol.png";
import group from "../../assests/banner/Group-3446.png";
import triangle from "../../assests/banner/symbolTriangle.png";
import bar from "../../assests/banner/symbolBar.png";

const Banner = () => {
  return (
    <div className="main_heading">
      <div className="headings">
        <div>
          <h1>
            The Global
            <br />
            Commerce
            <br />
            Platform For You
          </h1>
          <p>Building your business is now made easy with Singlebag!</p>
        </div>
        <button>
          Start your free trial
          <BsArrowRight />
        </button>
        <div className="description">
          Try Singlebag free for 14 days, no credit card required. Start your
          online store without any coding knowledge.
        </div>
      </div>
      <div className="banner_imgs">
        <img src={round} alt="round" className="round_img" />
        <img src={triangle} alt="triangle" className="triangle_img" />
        <img
          src={homePageBanner}
          alt="homepage_banner"
          className="banner_img_main"
        />
        <img src={group} alt="group" className="group_img" />
        <img src={bar} alt="bar" className="bar_img" />
      </div>
    </div>
  );
};

export default Banner;
