import React from "react";
import "./HeroSection.scss";
import img from "../../../assets/images/home/heroimage.png"

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Image in JSX */}
      <img
        src={img}
        alt="Hero Background"
        className="hero-bg-image"
      />
      <div className="hero-content">
        <h1>
        Let us help you <br /> make the move.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;