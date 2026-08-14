import React, { useEffect, useRef } from "react";
import "./BannerProjects.scss";

import bannerImg from "../../../assets/images/home/banner.png";

const projects = [
  {
    title: "Residential",
    text: "We build homes of every size and style with comfort, safety, and quality in mind.Each space is designed to support everyday living and lasting memories.",
  },
  {
    title: "Commercial",
    text: "We create smart commercial spaces that support growth and productivity.Our focus is on strong design, efficient layouts, and long-term value.",
  },
  {
    title: "Industrial",
    text: "We construct durable industrial facilities built for performance and reliability.Every project meets strict safety standards and operational needs.",
  },
  {
    title: "Government",
    text: "We deliver government projects with transparency, precision, and accountability.Our work supports public infrastructure that serves communities for years.",
  },
];

const BannerProjects = () => {
  const bannerRef = useRef(null);
  const projectCardsRef = useRef([]);
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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (headerRef.current) observer.observe(headerRef.current);

    projectCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setCardRef = (el, index) => {
    projectCardsRef.current[index] = el;
  };

  return (
    <section className="bp-section">
      {/* ====================== BANNER ====================== */}
      <div className="bp-banner" ref={bannerRef}>
        <img src={bannerImg} className="bp-image" alt="Construction Banner" />

        <div className="bp-overlay-box">
          <h1 className="bp-title">
            Begin Your Construction <br /> Journey Today
          </h1>

          <button
            className="bp-button"
            onClick={() =>
              (window.location.href = "https://shivbuilder.co.in/contact")
            }
          >
            BUILD WITH US
          </button>
        </div>
      </div>

      {/* ====================== PROJECTS ====================== */}
      <div className="bp-projects-wrapper">
        <div className="bp-header" ref={headerRef}>
          <div className="bp-title-wrap">
            <div className="bp-line"></div>
            <h2 className="bp-header-title">Projects</h2>
          </div>

          <p className="bp-header-sub">
            Snapshots of innovation, teamwork,<br />
            and successful delivery.
          </p>
        </div>

        <div className="bp-projects-grid">
          {projects.map((p, index) => (
            <div
              className="bp-project-card"
              key={index}
              ref={(el) => setCardRef(el, index)}
            >
              {/* TOP TITLE BOX */}
              <div className="bp-card-top">
                <h3 className="bp-top-title">{p.title}</h3>
              </div>

              {/* BOTTOM TEXT BOX - TITLE REMOVED */}
              <div className="bp-card-bottom">
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerProjects;
