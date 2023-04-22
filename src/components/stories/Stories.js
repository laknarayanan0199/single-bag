import React from "react";
import "./stories.css";
import RK from "../../assests/stories/Singlebag-RK.png";
import TH from "../../assests/stories/TH.png";
import { FaQuoteRight } from "react-icons/fa";
import { RxDotFilled, RxDot } from "react-icons/rx";

const Stories = () => {
  return (
    <div className="stories_heading">
      <div className="heading">
        <h3>Trusted by over 800+ EBusiness Store Owners</h3>
        <p>From startups to established brands, you'll be in a good company.</p>
      </div>
      <div className="stories">
        <div className="story">
          <div className="story_wrapper">
            <div className="story_wrapper_left">
              <img src={RK} alt="RK" />
              <div>
                <p>Rajesh Kumar</p>
                <p>Store Owner</p>
              </div>
            </div>
            <p>
              <FaQuoteRight />
            </p>
          </div>
          <p>
            Having an online store in Singlebag eCommerce platform is the
            easiest way to increase sales and retain customers. Think about the
            best online business to start and join Singlebag because online
          </p>
        </div>
        <div className="story">
          <div className="story_wrapper">
            <div className="story_wrapper_left">
              <img src={TH} alt="TH" />
              <div>
                <p>Thomas</p>
                <p>Store Owner</p>
              </div>
            </div>
            <p>
              <FaQuoteRight />
            </p>
          </div>
          <p>
            We use Singlebag to build ecommerce websites mainly for its
            impactful site explorers. Our business has immensely improved by
            using the link targets. We use it for getting a quick analysis of
            our site and for utilizing our store's extensive index when we want
            to dive deep. Build an effective ecommerce website to expand your
            business.
          </p>
        </div>
      </div>
      <div className="scroller">
        <RxDot size={24} />
        <RxDotFilled size={24} />
        <RxDot size={24} />
      </div>
    </div>
  );
};

export default Stories;
