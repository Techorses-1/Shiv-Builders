import React, { useEffect, useRef } from "react";
import "./MissionVision.scss";
import mission from "../../../assets/images/home/mission.png";
import vision from "../../../assets/images/home/vision.png";

const MissionVision = () => {
  const missionImageRef = useRef(null);
  const visionImageRef = useRef(null);
  const missionContentRef = useRef(null);
  const visionContentRef = useRef(null);

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
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset
      }
    );

    // Observe all elements that need animation
    if (missionImageRef.current) observer.observe(missionImageRef.current);
    if (visionImageRef.current) observer.observe(visionImageRef.current);
    if (missionContentRef.current) observer.observe(missionContentRef.current);
    if (visionContentRef.current) observer.observe(visionContentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="mv-section">
      <div className="mv-wrapper">

        {/* Mission */}
        <div className="mv-block mission">
          <div className="mv-image">
            <img
              ref={missionImageRef}
              src={mission}
              alt="mission"
            />
          </div>

          <div className="mv-content" ref={missionContentRef}>
            <div className="title-wrap">
              <div className="line"></div>
              <h2 className="mv-title">Mission</h2>
            </div>
            <p>
              To deliver every project with care, safety, and precision while understanding our client’s needs. We focus on quality craftsmanship, modern techniques, and transparent communication to create spaces that are functional, durable, and built to last.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mv-block vision">
          <div className="mv-content" ref={visionContentRef}>
            <div className="title-wrap">
              <div className="line"></div>
              <h2 className="mv-title">Vision</h2>
            </div>
            <p>
              To build strong, reliable, and meaningful spaces that improve everyday life and help communities grow. We aim to be a trusted name in construction known for quality, honesty, and long-lasting work.
            </p>
          </div>

          <div className="mv-image">
            <img
              ref={visionImageRef}
              src={vision}
              alt="vision"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;