import React, { useRef, useEffect, useState } from "react";
import "./AboutImageText.scss";

import img6 from "../../../assets/images/home/img6.png";
import img7 from "../../../assets/images/home/img7.jpeg";
import img8 from "../../../assets/images/home/img8.jpeg";
import img9 from "../../../assets/images/home/img9.jpeg";
import img10 from "../../../assets/images/home/img10.jpeg";

const AboutImageText = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.2, // Triggers when 20% of section is visible
        rootMargin: "0px 0px -50px 0px", // Adjust trigger point
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="abt-imgtxt-section" ref={sectionRef}>

      <div className="abt-imgtxt-wrapper">

        {/* LEFT IMAGE GRID */}
        <div className={`abt-imgtxt-grid ${isInView ? "animate-in" : ""}`}>

          {/* ROW 1 */}
          <div className={`abt-imgtxt-row abt-row-1 ${isInView ? "animate-row" : ""}`}>
            <img src={img6} alt="row1-img1" className="abt-img-left" />
            <img src={img7} alt="row1-img2" className="abt-img-right" />
          </div>

          {/* ROW 2 */}
          <div className={`abt-imgtxt-row abt-row-2 ${isInView ? "animate-row" : ""}`}>
            <img src={img8} alt="row2-img1" className="abt-img-left" />
            <img src={img9} alt="row2-img2" className="abt-img-right" />
          </div>

          {/* ROW 3 */}
          <div className={`abt-imgtxt-row abt-row-3 ${isInView ? "animate-row" : ""}`}>
            <img src={img10} alt="row3-img1" className="abt-img-left" />
            <img src={img6} alt="row3-img2" className="abt-img-right" />
          </div>

        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className={`abt-imgtxt-content ${isInView ? "animate-text" : ""}`}>
          <p className={isInView ? "animate-paragraph" : ""}>
            Shiv Builders is guided by the belief that every structure has a purpose and every space holds potential.
            With years of experience, we have built our identity around quality craftsmanship, thoughtful planning,
            and a commitment to delivering excellence in every detail. We value transparency and long-term relationships. We believe that good work speaks for itself.
            Every project carries our signature of trust, stability and thoughtful execution.
          </p>

          <p className={isInView ? "animate-paragraph" : ""}>
            We approach each project with a clear vision – combining strong fundamentals with modern techniques.
            Our team focuses on precision, ensuring that every step, from concept to completion, is handled with
            care and professionalism. This helps us create balanced, refined and long-lasting spaces.
             We value transparency and long-term relationships. We believe that good work speaks for itself.
            Every project carries our signature of trust, stability and thoughtful execution.
          </p>

          <p className={isInView ? "animate-paragraph" : ""}>
            We value transparency and long-term relationships. We believe that good work speaks for itself.
            Every project carries our signature of trust, stability and thoughtful execution. We value transparency and long-term relationships. We believe that good work speaks for itself.
            Every project carries our signature of trust, stability and thoughtful execution.
          </p>
        </div>

      </div>

    </section>
  );
};

export default AboutImageText;