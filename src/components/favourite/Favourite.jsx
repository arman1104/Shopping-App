import React from "react";
import "./Favourite.css";
import { favourites } from "../../assets";

const Favourite = () => {
  return (
    <div className="favourite-container">
      <h1>Young’s Favourite</h1>
      <ul className="favourite-list-container">
        {favourites.map((favourite) => (
          <li key={favourite.id} className="favourite-item">
            <img
              src={favourite.Image}
              alt={favourite.title}
              className="favourite-img"
            />
            <div className="favourite-text-container">
              <div className="icon-text-conatainer">
                <h3>{favourite.title}</h3>
                <p>{favourite.text}</p>
              </div>
              <span className="arrow-icon">→</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourite;
