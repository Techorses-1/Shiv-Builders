import React from "react";
import "./AboutCta.scss";
import ctaImage from "../../../assets/images/about/cta.png";

const AboutCta = () => {
  return (
    <section className="about-cta-section">

      <div className="about-cta-inner">

        {/* IMAGE ON LEFT SIDE */}
        <div className="about-cta-image">
          <img src={ctaImage} alt="Blueprint" />
        </div>

        {/* TEXT ON RIGHT SIDE */}
        <div className="about-cta-text">
          <span className="about-cta-quote-desktop about-cta-quote-mobile">“</span>
          
          <p className="about-cta-message">
            Your dream space is closer than you think.
          </p>
        </div>

      </div>

    </section>
  );
};

export default AboutCta;