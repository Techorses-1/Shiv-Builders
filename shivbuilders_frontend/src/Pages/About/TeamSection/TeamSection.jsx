import React, { useEffect, useRef } from "react";
import "./TeamSection.scss";

import img1 from "../../../assets/images/about/team/team1.png";
import img2 from "../../../assets/images/about/team/team2.png";
import img3 from "../../../assets/images/about/team/team3.png";
import img4 from "../../../assets/images/about/team/team4.png";
import img5 from "../../../assets/images/about/team/team5.png";
import img6 from "../../../assets/images/about/team/team6.png";
import img7 from "../../../assets/images/about/team/team7.png";
import img8 from "../../../assets/images/about/team/team8.png";

const teamMembers = [
  { id: 1, name: "Milli", role: "Interior Designer", image: img1 },
  { id: 2, name: "Roshan", role: "Site Engineer", image: img2 },
  { id: 3, name: "Shankar Bhai", role: "Plumbing Consultant", image: img3 },
  { id: 4, name: "Bhaumik", role: "Electrical Engineer", image: img4 },
  { id: 5, name: "Swarupa", role: "Structure Designer", image: img5 },
  { id: 6, name: "Suraj", role: "Architecture Designer", image: img6 },
  { id: 7, name: "Isha", role: "Interior Designer", image: img7 },
  // { id: 8, name: "Isabella Moore", role: "Finance Director", image: img8 }, 
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element comes into view
            entry.target.classList.add("animate-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px", // Same as Founders section
      }
    );

    // Observe the whole section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe the header section
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe all card elements
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (headerRef.current) observer.unobserve(headerRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

return (
  <section ref={sectionRef} className="team-section">
    <div className="team-container">

      {/* ===== HEADING (LEFT ALIGNED) ===== */}
      <div ref={headerRef} className="section-header">
        <div className="section-title-wrap">
          <div className="section-line"></div>
          <h2 className="section-title">Our Team</h2>
        </div>

        <p className="section-sub">
          Dedicated professionals working together<br /> to deliver excellence,
          innovation, and lasting <br /> impact through every project.
        </p>
      </div>

      {/* ===== FIRST ROW - 4 MEMBERS ===== */}
      <div className="team-row team-row-first">
        {teamMembers.slice(0, 4).map((member, index) => (
          <div 
            ref={(el) => (cardRefs.current[index] = el)}
            className="team-card" 
            key={member.id}
          >
            <div className="image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
              />

              <div className="name-badge">
                <div className="badge-name">{member.name}</div>
                <div className="badge-role">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== SECOND ROW - 3 MEMBERS (OFFSET/CENTERED) ===== */}
      <div className="team-row team-row-second">
        {teamMembers.slice(4, 7).map((member, index) => (
          <div 
            ref={(el) => (cardRefs.current[index + 4] = el)}
            className="team-card team-card-offset" 
            key={member.id}
          >
            <div className="image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
              />

              <div className="name-badge">
                <div className="badge-name">{member.name}</div>
                <div className="badge-role">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);
};

export default TeamSection;