import React from "react";
import "./Footer.css";
import { socialMedia } from "../../assets";

const Footer = () => {
  return (
    <div className="footer-container">
      {socialMedia.map((social) => (
        <div key={social.id} className="footer-section">
          {/* Grouping h1, p, and social icons together */}
          <div className="footer-content">
            <h1>{social.title}</h1>
            {social.text && <p>{social.text}</p>}
            {social.icons && (
              <ul className="footer-icon-container">
                {social.icons.map((icon, index) => (
                  <li key={index} className="footer-icon">
                    <img src={icon.src} alt={icon.name} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <h3>{social.content}</h3>
            {social.links && (
              <ul className="link-container">
                {social.links.map((link, index) => (
                  <li key={index} className="link">
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
