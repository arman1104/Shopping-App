import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero-img.png";
import HeroStar from "../../assets/hero-star.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-container">
        <h1>
          <span>let's</span> <span>explore</span> <span>unique</span>{" "}
          <span>clothes.</span>
        </h1>
        <p>Live for Influential and Innovatie fashion!</p>
        <button className="hero-btn">Shop Now</button>
      </div>
      <img src={HeroImage} alt="Hero Image" className="hero-img" />
      <img src={HeroStar} alt="" className="hero-star1" />
      <img src={HeroStar} alt="" className="hero-star2" />
      <img src={HeroStar} alt="" className="hero-star3" />
      <img src={HeroStar} alt="" className="hero-star4" />
    </div>
  );
};

export default Hero;
