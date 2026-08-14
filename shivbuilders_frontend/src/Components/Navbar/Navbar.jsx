import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import logoWhite from "../../assets/images/logo/new-white.png";
import logoColor from "../../assets/images/logo/new-logo.png";

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // SCROLL NAVBAR EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY > 140);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  // ACTIVE LINK CLASS
  const activeClass = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <nav className={`navbar ${scrollNav ? "scrolled" : ""}`}>
        <div className="nav-container">

          {/* LOGO */}
          <NavLink to="/" onClick={closeMobileMenu}>
            <img
              src={scrollNav ? logoColor : logoWhite}
              alt="logo"
              className="nav-logo"
            />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={activeClass}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutus" className={activeClass}>
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className={activeClass}>
                  PROJECT
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={activeClass}>
                  CONTACT US
                </NavLink>
              </li>
            </ul>

            {/* DESKTOP INQUIRY CALL */}
            <a href="tel:+919999999999">
              <button className="inquiry-btn">INQUIRY</button>
            </a>
          </div>

          {/* MOBILE ICON */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className={activeClass} onClick={closeMobileMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={activeClass} onClick={closeMobileMenu}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className={activeClass} onClick={closeMobileMenu}>
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={activeClass} onClick={closeMobileMenu}>
              CONTACT US
            </NavLink>
          </li>
        </ul>

        {/* MOBILE INQUIRY CALL */}
        <a
          href="tel:+919999999999"
          className="mobile-inquiry-btn"
          onClick={closeMobileMenu}
        >
          INQUIRY
        </a>
      </div>
    </>
  );
};

export default Navbar;
