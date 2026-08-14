import React, { useState, useEffect } from "react";
import "./ResidentialShowcase.scss";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
];

const ResidentialShowcase = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  /* 🔥 AUTOPLAY */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="res-showcase">

      {/* TEXT */}
      <div className="res-showcase-text">
        Discover the season’s must-haves, from<br />
         timeless classics to trend-setting pieces.
      </div>

      {/* DESKTOP ROW */}
      <div className="res-showcase-row desktop-only">
        {images.map((img, i) => (
          <div key={i} className={`res-card card-${i + 1}`}>
            <img src={img} alt="Residential" />
          </div>
        ))}
      </div>

      {/* MOBILE SLIDER */}
      <div className="res-mobile-slider mobile-only">
        {images.map((img, i) => {
          let cls = "mobile-slide";
          if (i === active) cls += " active";
          else if (i === (active - 1 + images.length) % images.length)
            cls += " prev";
          else cls += " next";

          return (
            <div className={cls} key={i}>
              <img src={img} alt="Residential mobile" />
            </div>
          );
        })}

        {/* ARROWS */}
        <button className="nav prev-btn" onClick={prevSlide}>‹</button>
        <button className="nav next-btn" onClick={nextSlide}>›</button>
      </div>

    </section>
  );
};

export default ResidentialShowcase;
