import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Industrial.scss";

const ImageModalSlider = lazy(() =>
  import("../Slider/Model/ImageModalSlider")
);

// TEMP – SAME IMAGES (YOU WILL REPLACE LATER)
import img1 from "../../../assets/images/resindential/Industrial/industrial1.jpg";
import img2 from "../../../assets/images/resindential/Industrial/industrial2.jpg";
import img3 from "../../../assets/images/resindential/Industrial/industrial3.jpg";
import img4 from "../../../assets/images/resindential/Industrial/industrial4.jpg";
import img5 from "../../../assets/images/resindential/Industrial/industrial5.png";

const slides = [
  // {
  //     id: 1,
  //     image: img1,
  //     text: "ABC Constructions – Mumbai",
  //     gallery: [img1],
  // },
  // {
  //     id: 2,
  //     image: img2,
  //     text: "XYZ Builders – Pune",
  //     gallery: [img2],
  // },
  {
    id: 1,
    image: img1,
    text: "Modern Homes – Ahmedabad",
    gallery: [img1],
  },
  {
    id: 2,
    image: img2,
    text: "Modern Homes – Ahmedabad",
    gallery: [img2],
  },
  {
    id: 3,
    image: img3,
    text: "Modern Homes – Ahmedabad",
    gallery: [img3],
  },
  {
    id: 4,
    image: img4,
    text: "Modern Homes – Ahmedabad",
    gallery: [img4],
  },
  {
    id: 5,
    image: img5,
    text: "Modern Homes – Ahmedabad",
    gallery: [img5],
  },

];

const Industrial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    const total = slides.length;

    if (isMobile) {
      if (index === activeIndex) return "slide mobile-active";
      if (index === (activeIndex - 1 + total) % total) return "slide mobile-prev";
      if (index === (activeIndex + 1) % total) return "slide mobile-next";
      return "slide mobile-hidden";
    }

    if (index === activeIndex) return "slide center";
    if (index === (activeIndex - 1 + total) % total) return "slide left";
    if (index === (activeIndex + 1) % total) return "slide right";
    if (index === (activeIndex + 2) % total) return "slide hidden-right";
    return "slide hidden-left";
  };

  return (
    <section className="industrial-section">
      <h2>Industrial</h2>

      <div className="slider-wrapper">
        <div className="slider">
          {slides.map((item, index) => (
            <div
              key={item.id}
              className={getClass(index)}
              onClick={() => {
                if (index === activeIndex) {
                  setModalImages(item.gallery);
                  setIsModalOpen(true);
                }
              }}
            >
              <img src={item.image} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <ImageModalSlider
            images={modalImages}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Industrial;
