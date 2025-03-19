import React from "react";
import "./Banner.css";
import { bannerData } from "../../assets";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Render Main Image */}
      {bannerData
        .filter((item) => item.type === "main")
        .map((banner) => (
          <img
            key={banner.id}
            src={banner.Image}
            alt="Main Banner"
            className="banner-image"
          />
        ))}

      {/* Render 4 Star Images */}
      {bannerData
        .filter((item) => item.type === "star")
        .map((star, index) => (
          <img
            key={star.id}
            src={star.Image}
            alt={`Star ${index + 1}`}
            className={`banner-star star-${index + 1}`}
          />
        ))}

      {/* Banner Text */}
      <div className="banner-text-container">
        <h1>
          <span className="payday">payday</span>
          <br /> <span className="sale">sale now</span>
        </h1>
        <p className="banner-para1">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>
        <span className="due-date">1 June - 10 June 2021</span>
        <p className="banner-para2">*Terms & Conditions apply</p>
        <button className="banner-btn">SHOP NOW</button>
      </div>
    </div>
  );
};

export default Banner;
