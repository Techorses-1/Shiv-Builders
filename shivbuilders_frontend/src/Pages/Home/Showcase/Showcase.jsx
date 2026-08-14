import React, { useEffect, useRef } from "react";
import "./Showcase.scss";

import img1 from "../../../assets/images/home/img1.png";
import img2 from "../../../assets/images/home/img2.png";
import img3 from "../../../assets/images/home/img3.png";
import img4 from "../../../assets/images/home/img4.png";
import img5 from "../../../assets/images/home/img5.png";

const Showcase = () => {
  const caption =
    "An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!";

  const showcaseCardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe header section
    if (headerRef.current) observer.observe(headerRef.current);

    // Observe all showcase cards
    showcaseCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to set refs
  const setCardRef = (el, index) => {
    showcaseCardsRef.current[index] = el;
  };

  return (
    <section className="showcase-section">
      <div className="showcase-wrapper">
        {/* HEADER */}
        <div className="showcase-header" ref={headerRef}>
          <div className="showcase-title-wrap">
            <div className="showcase-line"></div>
            <h2 className="showcase-title">Showcase</h2>
          </div>

          <p className="showcase-subtitle">
            A visual representation of our
            <br />
            culture and capabilities.
          </p>
        </div>

        {/* GRID */}
        <div className="showcase-grid">
          {/* Row 1: 40% - 60% */}
          <div className="showcase-row-1">
            <div 
              className="showcase-card showcase-card-1" 
              ref={(el) => setCardRef(el, 0)}
            >
              <img src={img1} alt="Showcase 1" />
              <div className="showcase-caption">
                <p>{caption}</p>
              </div>
            </div>

            <div 
              className="showcase-card showcase-card-2" 
              ref={(el) => setCardRef(el, 1)}
            >
              <img src={img2} alt="Showcase 2" />
              <div className="showcase-caption">
                <p>{caption}</p>
              </div>
            </div>
          </div>

          {/* Row 2: 60% - 40% */}
          <div className="showcase-row-2">
            <div 
              className="showcase-card showcase-card-3" 
              ref={(el) => setCardRef(el, 2)}
            >
              <img src={img3} alt="Showcase 3" />
              <div className="showcase-caption">
                <p>{caption}</p>
              </div>
            </div>

            <div 
              className="showcase-card showcase-card-4" 
              ref={(el) => setCardRef(el, 3)}
            >
              <img src={img4} alt="Showcase 4" />
              <div className="showcase-caption">
                <p>{caption}</p>
              </div>
            </div>
          </div>

          {/* Row 3 - full width */}
          <div 
            className="showcase-card showcase-card-5" 
            ref={(el) => setCardRef(el, 4)}
          >
            <img src={img5} alt="Showcase 5" />
            <div className="showcase-caption">
              <p>{caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;