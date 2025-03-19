import React from "react";
import "./Vouchers.css";
import { vouchers } from "../../assets";

const Vouchers = () => {
  return (
    <div className="vouchers-container">
      {vouchers.map((voucher) => (
        <div className="vouchers-item-container" key={voucher.id}>
          {/* Left Side - Text & Buttons */}
          <div className="text-btn-container">
            <h1 className="voucher-title">{voucher.title}</h1>
            <p className="voucher-text">{voucher.text}</p>
            <div className="btn-img-container">
              <img
                src={voucher.iosStore}
                alt="App Store"
                className="store-btn"
              />
              <img
                src={voucher.playstore}
                alt="Play Store"
                className="store-btn"
              />
            </div>
          </div>

          {/* Right Side - Mobile & Ellipses */}
          <div className="image-container">
            <div className="ellipse-container">
              <img src={voucher.ellipse1} alt="Ellipse" className=" ellipse1" />
              <img
                src={voucher.ellipse5}
                alt="Ellipse"
                className="ellipse ellipse5"
              />
              <img
                src={voucher.ellipse6}
                alt="Ellipse"
                className="ellipse ellipse6"
              />
              <span className="ellipse ellipse2"></span>
              <span className="ellipse ellipse3"></span>
              <span className="ellipse ellipse4"></span>
              <span className="ellipse ellipse7"></span>
            </div>
            <img src={voucher.mobile} alt="Mobile App" className="mobile" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vouchers;
