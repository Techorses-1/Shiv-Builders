import React from "react";
import "./NewCtaSection.scss";

const NewCtaSection = () => {
  return (
    <section className="new-cta-section">

      {/* Dot Pattern Background */}
      <div className="new-cta-dots"></div>

      <div className="new-cta-content">

        <h2 className="new-cta-title">
          Let’s Create <br />
          Something Beautiful <br />
          Together!
        </h2>

        {/* <button className="new-cta-btn">
          Let’s Start
        </button> */}
          <button
            className="new-cta-btn"
            onClick={() =>
              (window.location.href = "https://shivbuilder.co.in/contact")
            }
          >
             Let’s Start
          </button>

      </div>

    </section>
  );
};

export default NewCtaSection;
