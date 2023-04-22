import React from "react";
import "./freeTrial.css";
import wave from "../../assests/wave-11@2x.png";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

const FreeTrail = () => {
  return (
    <div className="free_trial">
      <h3>THE BEST WAY TO MAKE MONEY ONLINE IS TO START YOUR ONLINE STORE</h3>
      <h2>Your business dream is coming true</h2>
      <p>Start your journey. Start with Singlebag. Start now.</p>
      <button>
        Start your free trial
        <BsArrowRight />
      </button>
      <div className="payment_methods">
        <span>
          <MdOutlineDone size={30} color="white" />
          No credit card required
        </span>
        <span>
          <MdOutlineDone size={30} color="white" />
          Cancel anytime
        </span>
      </div>
      <div>
        <img src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default FreeTrail;
