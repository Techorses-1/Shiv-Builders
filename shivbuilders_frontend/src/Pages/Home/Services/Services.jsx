import React, { useEffect, useRef } from "react";
import "./Services.scss";

import residentialImg from "../../../assets/images/home/service1.png";
import commercialImg from "../../../assets/images/home/service2.png";
import governmentImg from "../../../assets/images/home/service3.png";
import industrialImg from "../../../assets/images/home/service4.png";

const servicesData = [
  {
    id: "01",
    title: "Residential Projects",
    text:
      "We deliver residential solutions designed for comfort, durability, and modern living. Whether it's individual homes, apartments, or housing developments, we focus on quality craftsmanship, safety standards, and aesthetic appeal—creating spaces families love to live in.",
    image: residentialImg,
    layout: "left-card", // card left, image right
  },
  {
    id: "02",
    title: "Commercial Projects",
    text:
      "Our commercial project services support businesses with functional, scalable, and high-performance infrastructure. From offices and retail spaces to industrial facilities, we build environments that enhance productivity, improve customer experience, and align with business goals.",
    image: commercialImg,
    layout: "right-card", // image left, card right
  },
  {
    id: "03",
    title: "Industrial Projects",
    text:
      "Our industrial project services support manufacturers and enterprises with robust, efficient, and scalable infrastructure. From factories and warehouses to production units and processing facilities, we develop environments that improve operational efficiency, ensure safety, and support long-term business growth.",
    image: industrialImg,
    layout: "left-card",
  },
  {
    id: "04",
    title: "Government Projects",
    text:
      "We execute government projects with strict adherence to compliance, safety protocols, and public service standards. Our work supports community development, public infrastructure, and institutional growth—delivering dependable and long-lasting results for large-scale civic needs.",
    image: governmentImg,
    layout: "right-card",
  },
];

const Services = () => {
  const serviceRowsRef = useRef([]);
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
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe header section
    if (headerRef.current) observer.observe(headerRef.current);

    // Observe all service rows
    serviceRowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to set row refs
  const setRowRef = (el, index) => {
    serviceRowsRef.current[index] = el;
  };

  return (
    <section className="services-section">
      <div className="services-wrapper">
        {/* Heading */}
        <div className="services-header" ref={headerRef}>
          <div className="services-title-wrap">
            <div className="services-line"></div>
            <h2 className="services-title">Services</h2>
          </div>
          <p className="services-subtitle">
            Whether you're dreaming of a cozy home retreat or a bold, modern workspace,
            our expert designers bring your vision to life.
          </p>
        </div>

        {/* Service Rows */}
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-row ${
                service.layout === "right-card" ? "reverse" : ""
              }`}
              ref={(el) => setRowRef(el, index)}
            >
              {/* Card */}
              <div className="service-card">
                <div className="service-card-inner">
                  <div className="service-number">{service.id}</div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-text">{service.text}</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;