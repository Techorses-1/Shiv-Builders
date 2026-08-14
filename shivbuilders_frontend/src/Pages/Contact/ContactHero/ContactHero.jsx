import React from "react";
import "./ContactHero.scss";
import img from "../../../assets/images/about/abouthero.jpg"; // Same image as ResidentialHero

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <img
        src={img}
        alt="Contact Background"
        className="contact-hero-bg-image"
      />

      <div className="contact-hero-content">
        <h1>Contact Us</h1>
      </div>
    </section>
  );
};

export default ContactHero;