import React from "react";
import "./templates.css";
import theme_1 from "../../assests/templates/Singlebag-Theme-1.jpg";
import theme_2 from "../../assests/templates/Singlebag-Theme-2.jpg";
import theme_3 from "../../assests/templates/Singlebag-Theme-3.jpg";
import theme_4 from "../../assests/templates/Singlebag-Theme-4.jpg";
import theme_5 from "../../assests/templates/Singlebag-Theme-5.jpg";
import theme_6 from "../../assests/templates/Singlebag-Theme-6.jpg";

const Templates = () => {
  return (
    <div className="templates">
      <h2>Singlebag, The Best Ecommerce Platform for Best Results</h2>
      <p>
        We provide a cutting-edge platform for every business. Singlebag offers
        you the best tools to build
        <br />
        an online store through which your products will reach diverse
        customers, be it Cafes, Electronics, Flowers, Fast food, Furniture,
        Books, or any other product.
      </p>
      <div className="themes">
        <img src={theme_1} alt="theme-1" />
        <img src={theme_2} alt="theme-2" />
        <img src={theme_3} alt="theme-3" />
        <img src={theme_4} alt="theme-4" />
        <img src={theme_5} alt="theme-5" />
        <img src={theme_6} alt="theme-6" />
      </div>
    </div>
  );
};

export default Templates;
