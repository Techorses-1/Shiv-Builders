import React from "react";
import "./CTASection.scss";

import ctaImage from "../../../assets/images/home/cta.png";

const CTASection = () => {
  return (
    <section className="cta-section">

      <div className="cta-inner">

        {/* TEXT */}
        <div className="cta-text">
          <span className="cta-quote-desktop cta-quote-mobile">”</span>

          <p className="cta-message">
  Build Smarter. Build Stronger.<br />
  Build with <span className="cta-highlight">Shiv Builders.</span>
</p>

        </div>

        {/* IMAGE */}
        <div className="cta-image">
          <img src={ctaImage} alt="Blueprint" />
        </div>

      </div>

    </section>
  );
};

export default CTASection;
