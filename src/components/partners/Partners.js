import React from "react";
import "./partners.css";
import instamojo from "../../assests/partners/instamojo.png";
import razorPay from "../../assests/partners/razor-pay.png";
import toyyibPay from "../../assests/partners/toyyibpay.png";
import paypal from "../../assests/partners/paypal.png";
import stripe from "../../assests/partners/stripe.png";

const Partners = () => {
  return (
    <div className="partners">
      <h2>Our Partners</h2>
      <div>
        <img src={instamojo} alt="Instamojo" />
        <img src={razorPay} alt="Razor-Pay" />
        <img src={toyyibPay} alt="toyyibpay" />
        <img src={paypal} alt="Pay-Pal" />
        <img src={stripe} alt="Stripe" />
      </div>
    </div>
  );
};

export default Partners;
