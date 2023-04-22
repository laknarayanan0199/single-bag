import React from "react";
import "./business.css";
import seller from "../../assests/business/Ambitious-Seller.jpg";
import supplier from "../../assests/business/Smart-Supplier.jpg";
import reseller from "../../assests/business/Rational-Reseller.jpg";
import { BsArrowRight } from "react-icons/bs";

const Business = () => {
  return (
    <div className="business">
      <h2>Ecommerce Business For Everyone!</h2>
      <div className="business_process">
        <div className="process">
          <div className="process_img">
            <img src={seller} alt="Ambitious-Seller" />
          </div>
          <div className="process_description">
            <h3>Ambitious Seller</h3>
            <p>
              Get start your business with Singlebag and sell to global
              consumers
            </p>
            <button>
              Know More
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="process">
          <div className="process_img">
            <img src={supplier} alt="Smart-Supplier" />
          </div>
          <div className="process_description">
            <h3>Smart Supplier</h3>
            <p>Maximize your sales revenue with 1000+ Singlebag Resellers</p>
            <button>
              Know More
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="process">
          <div className="process_img">
            <img src={reseller} alt="Rational-Reseller" />
          </div>
          <div className="process_description">
            <h3>Rational Reseller</h3>
            <p>Run your business with zero inventory and earn profits</p>
            <button>
              Know More
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
