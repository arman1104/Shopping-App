import React from "react";
import "./Arrivals.css";
import { arrivals } from "../../assets";

const Arrivals = () => {
  return (
    <div className="arrivals-container">
      <h1>new arrivals</h1>
      <ul className="arrivals-list-container">
        {arrivals.map((arrival) => (
          <li key={arrival.id} className="arrival-item">
            <img
              src={arrival.Image}
              alt={arrival.title}
              className="arrival-img"
            />
            <div className="arrival-text-container">
              <div className="iocn-text-conatainer">
                <h3>{arrival.title}</h3>
                <p>{arrival.text}</p>
              </div>
              <span className="arrow-icon">→</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Arrivals;
