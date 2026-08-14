import React, { useEffect, useRef } from "react";
import "./ConceptToCreation.scss";
import conceptImage from "../../../assets/images/home/concept.png";

const steps = [
  {
    title: "Understanding the Vision",
    text: "Every project begins with listening. We carefully understand the client’s ideas, needs, and goals to create a clear direction before any work begins.",
  },
  {
    title: "Planning & Design",
    text: "We transform concepts into structured plans through smart design, accurate measurements, and efficient resource planning to ensure a smooth execution.",
  },
  {
    title: "Quality Construction",
    text: "Using strong materials, modern techniques, and skilled workmanship, we build with precision while maintaining strict safety and quality standards.",
  },
  {
    title: "Final Delivery",
    text: "We complete every project with attention to finishing details, ensuring the space is ready, reliable, and built to last - exactly as promised.",
  },
];

const ConceptToCreation = () => {
  const heroRef = useRef(null);
  const timelineDotsRef = useRef([]);
  const timelineItemsRef = useRef([]);
  const verticalItemsRef = useRef([]);

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

    // Observe hero section
    if (heroRef.current) observer.observe(heroRef.current);

    // Observe timeline dots and items
    timelineDotsRef.current.forEach((dot) => {
      if (dot) observer.observe(dot);
    });

    timelineItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Observe vertical timeline items
    verticalItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to set refs
  const setDotRef = (el, index) => {
    timelineDotsRef.current[index] = el;
  };

  const setItemRef = (el, index) => {
    timelineItemsRef.current[index] = el;
  };

  const setVerticalItemRef = (el, index) => {
    verticalItemsRef.current[index] = el;
  };

  return (
    <section className="ctc-section">
      {/* HERO IMAGE + OVERLAY TEXT */}
      <div className="ctc-hero" ref={heroRef}>
        <div className="ctc-hero-inner">
          <img src={conceptImage} alt="Concept to Creation" className="ctc-hero-image" />

          <div className="ctc-hero-text">
            <div className="ctc-title-wrap">
              <div className="ctc-line"></div>
              <h2 className="ctc-hero-title">Concept to Creation</h2>
            </div>
            <h3 className="ctc-hero-subtitle">Process</h3>
            <p className="ctc-hero-description">
              Discover how our thoughtful process transforms ideas into personalized,
              functional, and beautifully styled spaces.
            </p>
          </div>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <div className="ctc-timeline">
        <div className="ctc-timeline-inner">

          {/* DESKTOP / TABLET: HORIZONTAL TIMELINE */}
          <div className="ctc-timeline-horizontal">
            <div className="ctc-timeline-track">
              {steps.map((step, index) => (
                <div className="ctc-dot-wrapper" key={index}>
                  <span
                    className="ctc-dot"
                    ref={(el) => setDotRef(el, index)}
                  />
                </div>
              ))}
            </div>

            <div className="ctc-timeline-items">
              {steps.map((step, index) => (
                <div
                  className="ctc-item"
                  key={index}
                  ref={(el) => setItemRef(el, index)}
                >
                  <h4 className="ctc-item-title">{step.title}</h4>
                  <p className="ctc-item-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE: VERTICAL TIMELINE WITH CONNECTING LINE */}
          <div className="ctc-timeline-vertical">
            {steps.map((step, index) => (
              <div
                className="ctc-vertical-item"
                key={index}
                ref={(el) => setVerticalItemRef(el, index)}
              >
                <span className="ctc-vertical-dot" />
                <div className="ctc-vertical-content">
                  <h4 className="ctc-item-title">{step.title}</h4>
                  <p className="ctc-item-text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConceptToCreation;