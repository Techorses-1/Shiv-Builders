import React from "react";
import "./Footer.scss";

import footerLogo from "../../assets/images/logo/white-logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* LOGO COLUMN */}
        <div className="footer-col logo-col">
          <img src={footerLogo} alt="Logo" className="footer-logo" />
        </div>

        {/* RESERVATIONS COLUMN */}
        <div className="footer-col">
          <h3 className="footer-title">Reservations Office</h3>

          <div className="footer-info">
            <p>
  <a
    href="https://www.google.com/maps/search/?api=1&query=4+madhuram+complex+near+Rang+vatika+temple+Bapod+vadodara"
    target="_blank"
    rel="noopener noreferrer"
  >
    4 , madhuram complex near Rang<br />
    vatika temple, Bapod , vadodara
  </a>
</p>


            <p>
              <a href="tel:+918905013055">+91 8905013055</a>
            </p>


            <p>
              <a href="mailto:shiv.builder2017@gmail.com">
                shiv.builder2017@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* OFFICE HOURS COLUMN */}
        <div className="footer-col">
          <h3 className="footer-title">Office Hours</h3>

          <div className="footer-info">
            <p>
              Monday to Friday<br />
              9:00 am to 6:00 pm
            </p>
            <p>
              Saturday<br />
              9:00 am to 12:00 noon
            </p>
          </div>
        </div>

        {/* COMPANY COLUMN */}
        <div className="footer-col">
          <h3 className="footer-title">Company</h3>

          <ul className="footer-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "footer-active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={({ isActive }) => isActive ? "footer-active" : ""}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" className={({ isActive }) => isActive ? "footer-active" : ""}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "footer-active" : ""}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* SOCIAL COLUMN */}
        <div className="footer-col social-col">
          <h3 className="footer-title">Get Social</h3>

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/shiv.builder2017?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/shiv.builder/?igshid=ZDdkNTZiNTM%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://g.co/kgs/2CwHxg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle />
            </a>
          </div>

          <button className="footer-tag-btn">Tag us in your photos</button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="footer-copy">
        <span className="copyright-line">© 2025 Shiv Builders</span>
        <span className="developer-line">
          Designed & Developed by {" "}
          <a
            href="https://techorses.com"
            target="_blank"
            rel="noopener noreferrer"
            className="techorses-link"
          >
            TECHORSES
          </a>
        </span>
      </p>

    </footer>
  );
};

export default Footer;
