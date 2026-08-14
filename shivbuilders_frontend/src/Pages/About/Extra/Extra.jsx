import React, { useState } from "react";
import "./Extra.scss";

import review1 from "../../../assets/images/about/review1.png";
import review2 from "../../../assets/images/about/review2.png";
import review3 from "../../../assets/images/about/review3.png";

const teamMembers = [
  {
    name: "Rubi Mishra",
    role: "Principle Architect",
    img: review1,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias totam corrupti quia quo deserunt laborum facere rerum cupiditate."
  },
  {
    name: "Raina Shaikh",
    role: "Principle Architect",
    img: review2,
    bio: "Doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id, praesentium facilis alias unde totam enim dicta reprehenderit eligendi."
  },
  {
    name: "Raj Goel",
    role: "Principle Architect",
    img: review3,
    bio: "Voluptatibus laudantium magnam! Non quia nulla nam voluptates dolorem, perspiciatis fugit cumque sequi aperiam vel iusto assumenda."
  }
];

const Extra = () => {
  const [index, setIndex] = useState(2); // Start with 3rd member active

  const nextSlide = () => {
    if (index === 0) return; // Don't go beyond first member
    
    // Move members: left → middle → right
    setIndex((prev) => prev - 1);
  };

  const getOrder = (i) => {
    // If 3rd member is active (index = 2):
    // i=0 → left, i=1 → middle, i=2 → right
    
    // If 2nd member is active (index = 1):
    // i=0 → left, i=1 → right, i=2 → middle
    
    // If 1st member is active (index = 0):
    // i=0 → right, i=1 → left, i=2 → middle
    
    if (i === index) return "right"; // Active member on right
    
    // Find positions for other members
    if (index === 2) {
      // 3rd is active
      if (i === 1) return "middle";
      if (i === 0) return "left";
    }
    
    if (index === 1) {
      // 2nd is active
      if (i === 0) return "left";
      if (i === 2) return "middle";
    }
    
    if (index === 0) {
      // 1st is active
      if (i === 1) return "left";
      if (i === 2) return "middle";
    }
    
    return "hidden";
  };

  return (
    <section className="team-section">

      {/* RIGHT TOP HEADING - KEEPING ORIGINAL */}
      <div className="team-header">
        <h2 className="team-title">Our Team</h2>
        <p className="team-sub">
          Unleashing potential through teamwork and innovation. 
          Driving excellence, one project at a time, for a brighter future.
        </p>
      </div>

      {/* TEAM DISPLAY */}
      <div className="team-container">
        {teamMembers.map((member, i) => (
          <div key={i} className={`team-card position-${getOrder(i)}`}>
            <img src={member.img} alt={member.name} className="team-img" />

            {/* Only ACTIVE card (right side) shows content */}
            {getOrder(i) === "right" && (
              <div className="team-details">
                <p className="team-bio">{member.bio}</p>
                <div className="team-socials">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            )}

            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>

      {/* ARROW BUTTON */}
      <div className="team-arrow" onClick={nextSlide}>
        <span>➜</span>
      </div>

    </section>
  );
};

export default Extra;