import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.scss";

import bgImg from "../../../assets/images/home/review.png";
import user1 from "../../../assets/images/home/user.png";
import user2 from "../../../assets/images/home/user.png";
import user3 from "../../../assets/images/home/user.png";

const testimonials = [
  {
    id: 1,
    name: "Mr. Raj Kapoor",
    text: "Reliable and skilled professional. Work was smooth, on time, and delivered with a polished finish throughout.",
    avatar: user1,
  },
  {
    id: 2,
    name: "Ms. Ritu Shah",
    text: "Delivered quality work with attention to detail. On-time delivery, great communication, and beautiful finishing everywhere.",
    avatar: user2,
  },
  {
    id: 3,
    name: "Mr. Manish Desai",
    text: "Amazing experience. Professional approach, clean execution and top-notch quality results. Highly recommended!",
    avatar: user3,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide function
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => {
        // Move to next index, loop back to 0 if at end
        return (prevIndex + 1) % testimonials.length;
      });
    }, 3000); // 3 seconds
  };

  // Initialize auto-slide
  useEffect(() => {
    startAutoSlide();
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Handle hover events
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoSlide();
  };

  const handleAvatarClick = (clickedIndex) => {
    setActiveIndex(clickedIndex);
    
    // Restart auto-slide after manual click
    if (!isPaused) {
      startAutoSlide();
    }
  };

  const t = testimonials[activeIndex];

  return (
    <section
      className="testimonials-section"
      style={{ backgroundImage: `url(${bgImg})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overlay" />

      <div className="testimonials-wrapper">
        {/* TOP HEADING */}
        <h1 className="main-title">Testimonials and Reviews</h1>
        <p className="sub-title">FROM THOUSANDS OF CLIENTS</p>

        <div className="content-row">
          {/* LEFT SIDE */}
          <div className="left-block">
            <span className="quote-icon">”</span>
            <h2 className="left-text">
              What our <br /> customers are <br /> saying
            </h2>
            <div className="arrow-icon">→</div>
          </div>

          {/* RIGHT SIDE REVIEW */}
          <div className="right-block">
            <div className="speech-bubble">
              <h3 className="review-name">{t.name}</h3>
              <p className="review-text">{t.text}</p>
            </div>

            {/* AVATARS - NO MOVEMENT, JUST ACTIVE STATE */}
            <div className="avatars-row">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`avatar ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleAvatarClick(index)}
                >
                  <img src={item.avatar} alt="avatar" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;