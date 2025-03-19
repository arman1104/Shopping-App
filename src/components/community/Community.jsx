import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <div className="community-container">
      <h1 className="community-heading">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h1>
      <p className="community-para">
        Type your email down below and be young wild generation
      </p>
      <div className="input-container">
        <input type="text" placeholder="Enter your email here" />
        <button>SEND</button>
      </div>
    </div>
  );
};

export default Community;
