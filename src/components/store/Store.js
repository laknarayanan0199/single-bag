import React from "react";
import "./store.css";
import singleBagStore from "../../assests/store/Singlebag-store.png";
import growYourBusiness from "../../assests/store/Grow-your-Online-business.jpg";
import instantCheckout from "../../assests/store/Instant-Checkout.jpg";
import deliveryAgent from "../../assests/store/Your-business-Your-Delivery-Agent.jpg";
import pointOfSale from "../../assests/store/Flexible-Point-Of-Sale.jpg";
import manageEverthing from "../../assests/store/Singlebag-Manage-Everything.png";
import { BsArrowRight } from "react-icons/bs";

const Store = () => {
  return (
    <div className="store_container">
      <h3>Create an online store with no coding knowledge</h3>
      <h2>
        Ecommerce stores are now the powerhouse of building engaging business.
      </h2>
      <div className="contents">
        <div>
          <img src={singleBagStore} alt="singleBagStore" />
        </div>
        <div className="content_description">
          <h3>Online Store for Every Business</h3>
          <p>
            Sell anything and everything online by building an online store. The
            best deal is that you could sell everywhere, all around the globe.
            With a myriad of options for your storefront designs and abundant
            options for extensions, start your ecommerce store in a few simple
            steps and start selling with Singlebag.
          </p>
          <span>
            Get Started
            <BsArrowRight />
          </span>
        </div>
      </div>
      <div className="contents">
        <div className="content_description">
          <h3>Grow Your Online Business</h3>
          <p>
            Get your online store discovered by your customers through Social
            media platforms, SEO tools, marketing tools. Singlebag has built-in
            marketing tools that help you manage marketing your online business
            using the best methods. These tools assist you in analyzing digital
            marketing campaigns and guides you with staying updated with
            marketing strategies.
          </p>
          <span>
            Get Started
            <BsArrowRight />
          </span>
        </div>
        <div>
          <img src={growYourBusiness} alt="Grow your online business" />
        </div>
      </div>
      <div className="contents">
        <div>
          <img src={instantCheckout} alt="Reliable and Instant Checkout" />
        </div>
        <div className="content_description">
          <h3>Reliable and Instant Checkout</h3>
          <p>
            Ease the checkout process with our multiple payment gateways and
            manual payment options and streamline your customer’s purchasing
            process.
          </p>
          <span>
            Get Started
            <BsArrowRight />
          </span>
        </div>
      </div>
      <div className="contents">
        <div className="content_description">
          <h3>Your business, Your Delivery Agent</h3>
          <p>
            Manage your business delivery on your own. With our unique delivery
            agent app, you can deliver your products to consumers with your
            delivery agent and reduce the burden of third-party delivery
            services.
          </p>
          <span>
            Get Started
            <BsArrowRight />
          </span>
        </div>
        <div>
          <img src={deliveryAgent} alt="Your business, Your Delivery Agent" />
        </div>
      </div>
      <div className="contents">
        <div>
          <img src={pointOfSale} alt="Flexible Point-Of-Sale" />
        </div>
        <div className="content_description">
          <h3>Flexible Point-Of-Sale</h3>
          <p>
            Empower your business with an all-in-one POS that integrates offline
            marketing, sales, and inventory, with e-commerce. Turn your mobile
            device into a POS when you need it.
          </p>
          <span>
            Get Started
            <BsArrowRight />
          </span>
        </div>
      </div>
      <div className="contents">
        <div className="content_description">
          <h3>Make Money While Managing with Ease</h3>
          <p>
            Monitor the performance of your store from a centralized dashboard.
            Get Constant updates and reliable 24/7 support service. Protect
            yourself and your visitors with a free SSL certificate and dedicated
            IP. Making money with an online store is just a few clicks away.
          </p>
          <span>
            Get Started
            <BsArrowRight />
          </span>
        </div>
        <div>
          <img src={manageEverthing} alt="Singlebag-Manage-Everything" />
        </div>
      </div>
    </div>
  );
};

export default Store;
