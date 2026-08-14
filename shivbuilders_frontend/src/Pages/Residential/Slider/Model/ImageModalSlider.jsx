import React, { useState, useEffect } from "react";
import "./ImageModalSlider.scss";

const ImageModalSlider = ({
  images = [],
  text = "",
  startIndex = 0,
  onClose,
}) => {
  const [index, setIndex] = useState(startIndex);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  // ✅ AUTO SLIDE – 3 SECONDS
  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div
        className="image-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE */}
        <img src={images[index]} alt="Preview" />

        {/* ARROWS – SHOW ONLY IF MORE THAN 1 IMAGE */}
        {images.length > 1 && (
          <div className="modal-controls">
            <button onClick={prev} aria-label="Previous">
              ‹
            </button>
            <button onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        )}


        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* TEXT BELOW MODAL */}
        {text && <div className="modal-text">{text}</div>}
      </div>
    </div>
  );
};

export default ImageModalSlider;
