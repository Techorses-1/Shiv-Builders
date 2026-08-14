import React, { useEffect, useRef } from "react";
import "./OurJourney.scss";

const journeyData = [
  { id: "01", year: "2008", title: "First Major Residential Project", desc: "We completed our first large residential project, marking the beginning of Shiv Builders’ journey. It laid the foundation for our commitment to quality homes and trusted relationships.", pill: true },
  { id: "02", year: "2014", title: "Expanded to Commercial Projects", desc: "We stepped into commercial construction, bringing our standards to business spaces. This expansion strengthened our expertise and widened our vision.", pill: true },
  { id: "03", year: "2018", title: "First Major Opened", desc: "A milestone project opened its doors, showcasing our growing capabilities.It became a symbol of our precision, planning, and craftsmanship.", pill: false },
  { id: "04", year: "2025", title: "Won Regional Design", desc: "Our work earned regional recognition for design and execution excellence.This achievement reflected our dedication to innovation and quality.", pill: false },
  { id: "05", year: "2026", title: "Strengthening Our Future Vision", desc: "We continue to grow with bigger goals and stronger partnerships.Our focus remains on building lasting spaces for the next generation.", pill: true },
];

const OurJourney = () => {
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((ent) => {
          if (ent.isIntersecting) ent.target.classList.add("animated");
        }),
      { threshold: 0.2 }
    );

    rowRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey-section">
      <div className="journey-wrapper">

        {/* ROW 1 */}
        <div className="journey-row row-1">
          <div className="journey-header">
            <div className="journey-title-wrap">
              <div className="journey-line"></div>
              <h2 className="journey-title">Our Journey</h2>
            </div>
            <p className="journey-subtitle">
              Launched with passion to redefine
              spaces through innovative,
              personalized interior design solutions.
            </p>
          </div>

          <div
            ref={(el) => (rowRefs.current[0] = el)}
            className="journey-card-container"
          >
            <JourneyCard {...journeyData[0]} index={0} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="journey-row row-2">
          <div ref={(el) => (rowRefs.current[1] = el)} className="journey-card-container">
            <JourneyCard {...journeyData[1]} index={1} />
          </div>

          <div ref={(el) => (rowRefs.current[2] = el)} className="journey-card-container">
            <JourneyCard {...journeyData[2]} index={2} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="journey-row row-3">
          <div ref={(el) => (rowRefs.current[3] = el)} className="journey-card-container">
            <JourneyCard {...journeyData[3]} index={3} />
          </div>

          <div ref={(el) => (rowRefs.current[4] = el)} className="journey-card-container">
            <JourneyCard {...journeyData[4]} index={4} />
          </div>
        </div>

      </div>
    </section>
  );
};

const JourneyCard = ({ id, year, title, desc, pill, index }) => {
  return (
    <div className={`journey-card ${pill ? "pill" : "plain"} mobile-style-${index + 1}`}>
      <div className="journey-number">{id}</div>
      <div className="journey-text">
        <h4 className="journey-year">{year}</h4>
        <h3 className="journey-card-title">{title}</h3>
        <p className="journey-desc">{desc}</p>
      </div>
    </div>
  );
};

export default OurJourney;
