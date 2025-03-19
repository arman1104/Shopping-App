import React from "react";
import "./Brands.css";
import { brands } from "../../assets";

const Brands = () => {
  return (
    <div className="brand-container">
      {brands.map((brand, index) => (
        <img key={index} src={brand} className="brand-img" />
      ))}
    </div>
  );
};

export default Brands;
