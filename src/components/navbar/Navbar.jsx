import React, { useState } from "react";
import "./Navbar.css";
import Vector from "../../assets/vector.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      {/* Logo Section */}
      <div className="nav-logo-container">
        <img src={Vector} alt="Nav Logo" className="nav-logo" />
        <h1>Fashion</h1>
      </div>

      {/* Desktop Menu List & Button  */}
      <div className="nav-menu">
        <ul className="nav-list-container">
          <li>catalogue</li>
          <li>fashion</li>
          <li>favourite</li>
          <li>lifestyle</li>
        </ul>
        <button className="nav-btn">sign up</button>
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={() => setIsOpen(!isOpen)} className="mobile-menu">
        {isOpen ? <X /> : <Menu />}
      </div>

      {/* Mobile Navigation List (Visible When isOpen is True) */}
      {isOpen && (
        <ul className="mobile-nav-list-container">
          <li>catalogue</li>
          <li>fashion</li>
          <li>favourite</li>
          <li>lifestyle</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
