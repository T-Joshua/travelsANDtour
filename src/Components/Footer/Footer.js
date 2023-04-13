import React from "react";
import "./FooterStyles.css";

import Logo3 from "../../Asssets/logo3.png";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <img
            style={{
              width: "150px",
              marginTop: "1rem ",
              marginLeft: "-2rem",
              height: "15vh",
              textAlign: "center",
              alignItems: "center",
              objectFit: "fill",
            }}
            src={Logo3}
            alt="/"
          />
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icons" />
            <FaYoutube className="icons" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
