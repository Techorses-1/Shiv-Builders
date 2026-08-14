import React, { useEffect, useRef } from "react";
import "./Founders.scss";
import founder from "../../../assets/images/about/team/founder.png";
import img from "../../../assets/images/about/img1.png";

const foundersData = [
  {
    id: 1,
    name: "Anuj Srivastava",
    title: "Founder and Chairman of the Board",
    description:
      "A dreamer and a chess master of the startup world, Anuj always keeps you guessing about his next move. With years of experience in leading worldwide product marketing functions and a deep knowledge of consumers, he uses his expertise to lead Livspace.",
    align: "left",
  },
  {
    id: 2,
    name: "Anuj Srivastava",
    title: "Founder and Chairman of the Board",
    description:
      "A dreamer and a chess master of the startup world, Anuj always keeps you guessing about his next move. With years of experience in leading marketing functions and a deep knowledge of consumers, he uses his expertise to lead Livspace.",
    align: "right",
  },
  {
    id: 3,
    name: "Anuj Srivastava",
    title: "Founder and Chairman of the Board",
    description:
      "A dreamer and a chess master of the startup world, Anuj always keeps you guessing about his next move. With years of experience in leading worldwide product marketing functions and a deep knowledge of consumers, he uses his expertise to lead Livspace.",
    align: "left",
  },
  {
    id: 4,
    name: "Anuj Srivastava",
    title: "Founder and Chairman of the Board",
    description:
      "A dreamer and a chess master of the startup world, Anuj always keeps you guessing about his next move. With years of experience in leading marketing functions and a deep knowledge of consumers, he uses his expertise to lead Livspace.",
    align: "right",
  },
];

const Founders = () => {
  const cardRefs = useRef([]);
  const firstSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element comes into view
            entry.target.classList.add("animate-visible");

            // For first section, also trigger child animations
            if (entry.target.classList.contains("first-section-wrapper")) {
              const imageBox = entry.target.querySelector('.founder-image-box');
              const content = entry.target.querySelector('.founder-content');

              if (imageBox) imageBox.classList.add('animate-visible');
              if (content) content.classList.add('animate-visible');
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe first section
    if (firstSectionRef.current) {
      observer.observe(firstSectionRef.current);
    }

    // Observe all card elements in second section
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      if (firstSectionRef.current) observer.unobserve(firstSectionRef.current);
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      {/* FIRST SECTION */}
      <section className="founder-section">
        <div
          ref={firstSectionRef}
          className="founder-wrapper first-section-wrapper"
        >
          {/* IMAGE */}
          <div className="founder-image-box">
            <img src={founder} alt="Founder" />
          </div>

          {/* CONTENT */}
          <div className="founder-content">
            <h1>Ravi Kayasth</h1>
            <h3>Founder and Chairman of the Board</h3>

            <p>
              He is a qualified Civil Engineer (B.E. Civil) from M.S. University with over <span className="number-font">a decade</span> of hands-on industry experience. He began his professional journey in <span className="number-font">2011</span> with Adani Group, where he worked on the prestigious Shantigram high-rise project <span className="number-font">(G+18)</span>, gaining strong expertise in large-scale construction and execution. From <span className="number-font">2014</span> to <span className="number-font">2018</span>, he was associated with Pacifica (an MNC), contributing to the development of premium residential bungalow projects, where he refined his skills in quality construction and project management. In <span className="number-font">2018</span>, driven by a vision to deliver excellence and build independently, he started his own business, bringing together technical expertise, industry experience, and a commitment to quality-driven construction.
            </p>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      {/* <section className="founders-list-section">
        {foundersData.map((item, index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            className={`founders-list-card ${
              item.align === "right" ? "reverse" : ""
            }`}
            key={item.id}
          >
            
            <div
              className={`founders-list-image ${
                item.align === "left" ? "animate-left" : "animate-right"
              }`}
            >
              <img src={img} alt="Founder" />
            </div>

            <div className="founders-list-content">
              <h2>{item.name}</h2>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section> */}
    </>
  );
};

export default Founders;