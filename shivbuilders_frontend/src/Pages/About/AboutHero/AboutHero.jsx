import React from "react";
import "./AboutHero.scss";
import img from "../../../assets/images/about/abouthero.jpg";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <img
        src={img}
        alt="About Us Background"
        className="about-hero-bg-image"
      />

      <div className="about-hero-content">
        <h1>
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
