import React from "react";
import "./ResidentialHero.scss";
import img from "../../../assets/images/about/abouthero.jpg";

const ResidentialHero = () => {
  return (
    <section className="residential-hero">
      <img
        src={img}
        alt="Residential Background"
        className="residential-hero-bg-image"
      />

      <div className="residential-hero-content">
        <h1>Projects</h1>
      </div>
    </section>
  );
};

export default ResidentialHero;
