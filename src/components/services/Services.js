import React from "react";
import "./services.css";
import hosting from "../../assests/services/hosting.png";
import wholesale from "../../assests/services/wholesale.png";
import onlineShopping from "../../assests/services/online-shopping1.png";
import revenue from "../../assests/services/revenue.png";
import book from "../../assests/services/book.png";

const Services = () => {
  return (
    <div className="services_container">
      <p>What do we offer?</p>
      <div className="services">
        <div className="service_box_1">
          <div className="service">
            <img src={hosting} alt="hosting" />
            <h3>Start an online business</h3>
            <p>
              Build your online store in a few easy steps. No coding knowledge
              is required, just your idea and passion!
            </p>
          </div>
          <div className="service">
            <img src={wholesale} alt="wholesale" />
            <h3>Become a wholesaler</h3>
            <p>
              Become a wholesaler and connect with multiple store owners and
              businesses.
            </p>
          </div>
          <div className="service">
            <img src={onlineShopping} alt="online-shopping" />
            <h3>Become a reseller</h3>
            <p>
              Become a reseller and earn money like a full fledged entrepreneur.
            </p>
          </div>
        </div>
        <div className="service_box_2">
          <div className="service">
            <img src={revenue} alt="revenue" />
            <h3>Earn a recurring revenue</h3>
            <p>
              Partner with Singlebag and help other businesses create their
              ecommerce stores and earn a commission.
            </p>
          </div>
          <div className="service">
            <img src={book} alt="book" />
            <h3>Share your knowledge</h3>
            <p>
              Educate others and get educated, join our Community Forum and
              network with online store owners from any part of the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
