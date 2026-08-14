import React from "react";
import "./WorkTogetherSection.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

import workImg from "../../../assets/images/contact/contactimage.png";

const WorkTogetherSection = () => {
  return (
    <section className="work-together-section">
      <div className="work-container">

        {/* LEFT CONTENT */}
        <div className="work-left">
          <div className="contact-block">
            <h4 className="heading-font">Stay with us</h4>

            <p>
              4, Madhuram Complex near Rang<br />
              Vatika Temple, Bapod, Vadodara
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

          <div className="social-block">
            <h4 className="heading-font">Get social</h4>

            <div className="social-icons">
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
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="work-right">
          <img src={workImg} alt="Work Together Illustration" />
        </div>

      </div>

      {/* BIG TEXT */}
      <div className="work-footer-text">
        <h1>
          <span>LET’S WORK</span>{" "}
          <span>TOGETHER</span>
        </h1>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
