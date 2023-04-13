import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./NavbarStyles.css";

import Logo3 from "../../Asssets/logo3.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
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
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="destination" smooth={true} duration={500}>
          <li>Destination</li>
        </Link>
        <Link to="carousel" smooth={true} duration={500}>
          <li>Travel</li>
        </Link>
        <Link to="book" smooth={true} duration={500}>
          <li>Book</li>
        </Link>
        <Link to="views" smooth={true} duration={500}>
          <li>View</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenu className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            <li>Home</li>
          </Link>
          <Link
            to="destination"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            <li>Destination</li>
          </Link>
          <Link to="carousel" smooth={true} duration={500} onClick={closeMenu}>
            <li>Travel</li>
          </Link>
          <Link to="book" smooth={true} duration={500} onClick={closeMenu}>
            <li>Book</li>
          </Link>
          <Link to="views" smooth={true} duration={500} onClick={closeMenu}>
            <li>View</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icons" />
            <FaYoutube className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
