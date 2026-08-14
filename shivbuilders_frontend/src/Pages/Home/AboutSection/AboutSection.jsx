import React, { useEffect } from "react";
import "./AboutSection.scss";
import about from "../../../assets/images/home/aboutus.png";
import aboutnew from "../../../assets/images/home/ff.jpg";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Add your slider images here - replace these with actual imports
import sliderImg1 from "../../../assets/images/home/aboutus.png";
import sliderImg2 from "../../../assets/images/home/ff.jpg";
import sliderImg3 from "../../../assets/images/home/aboutus.png";
import sliderImg4 from "../../../assets/images/home/ff.jpg";

const AboutSection = () => {
  // Slider images array
  const sliderImages = [
    sliderImg1, sliderImg2, sliderImg3, sliderImg4
  ];

  // Create pairs for desktop
  const desktopSlides = [];
  for (let i = 0; i < sliderImages.length; i++) {
    const firstImg = sliderImages[i];
    const secondImg = sliderImages[(i + 1) % sliderImages.length];
    desktopSlides.push([firstImg, secondImg]);
  }

  // SIMPLE Animation observer
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
        threshold: 0.1,
        rootMargin: "0px"
      }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll('.about-row-1, .about-row-2, .mobile-about-section');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* ========== DESKTOP VIEW ========== */}
        <div className="desktop-view">
          <div className="about-row-1">
            <div className="about-content-1">
              <div className="about-title-wrap">
                <div className="about-line"></div>
                <h2>About us</h2>
              </div>
              <p>
                Shiv Builders believes every structure has a purpose and every space holds untapped potential. With years of hands-on experience in the construction industry, we are recognized for our quality craftsmanship, thoughtful planning, and uncompromising attention to detail. Each project begins with a clear vision - combining strong engineering fundamentals with modern construction techniques to deliver results that stand the test of time.</p>
              <p>
                From concept to completion, our team works with precision, care, and professionalism at every stage. We focus not only on building structures but on building trust through transparency, reliability, and consistent execution.
              </p>
            </div>
            <div className="about-img-box">
              <img src={about} alt="Modern House" />
            </div>
          </div>

          <div className="about-row-2">
            <div className="about-img-box">
              <img src={aboutnew} alt="Construction Project" />
            </div>
            <div className="about-content-2">
              <p>
                At Shiv Builders, we don’t just construct buildings; we create spaces where memories are made, businesses grow, and communities become stronger. Our expertise spans residential, commercial, industrial, and government projects, each customized to meet the unique needs of our clients while maintaining the highest standards of safety and quality.
              </p>
              <p>   
                We believe successful construction is a collaboration. By listening closely to our clients and understanding their vision, we transform ideas into functional, aesthetic, and enduring spaces. Innovation, integrity, and accountability guide every decision we make, ensuring that each project reflects both our values and our client’s aspirations.
              </p>
              <p>
                <strong>Shiv Builders - Building with purpose. Delivering with pride.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* ========== MOBILE VIEW ========== */}
        <div className="mobile-view">
          <div className="mobile-about-section">
            <div className="about-title-wrap">
              <div className="about-line"></div>
              <h2>About us</h2>
            </div>

            {/* First Section - Paragraphs then Image */}
            <div className="mobile-content-1">
              <p>
                Shiv Builders is guided by the belief that every structure has a purpose and every space holds potential. With years of experience, we have built our identity around quality craftsmanship, thoughtful planning, and a commitment to delivering excellence in every detail. We approach each project with a clear vision – combining strong fundamentals with modern techniques. Our team focuses on precision, ensuring that every step, from concept to completion, is handled with care and professionalism.
              </p>
              <p>
                At Shiv Builders, we don't just construct buildings; we create spaces where
                memories are made, businesses thrive, and communities grow stronger together.
              </p>
            </div>

            <div className="mobile-img-box">
              <img src={about} alt="Modern House" />
            </div>

            {/* Second Section - First Paragraph */}
            <div className="mobile-content-2">
              <p>
                Our expertise spans across residential, commercial, and industrial projects, each tailored to meet the unique needs of our clients while maintaining the highest standards of quality and safety. At Shiv Builders, we don't just construct buildings; we create spaces where memories are made, businesses thrive, and communities grow stronger together.
              </p>
            </div>

            {/* Second Section - Image */}
            <div className="mobile-img-box">
              <img src={aboutnew} alt="Construction Project" />
            </div>

            {/* Second Section - Second Paragraph */}
            <div className="mobile-content-2">
              <p>
                Our expertise spans across residential, commercial, and industrial projects, each tailored to meet the unique needs of our clients while maintaining the highest standards of quality and safety. At Shiv Builders, we don't just construct buildings; we create spaces where memories are made, businesses thrive, and communities grow stronger together.
              </p>
            </div>
          </div>
        </div>

        {/* ========== SLIDER SECTION ========== */}
        <div className="slider-section">
          {/* Desktop Slider - Shows 2 images side by side */}
          <div className="desktop-slider-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="desktop-swiper"
            >
              {desktopSlides.map((slidePair, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-pair">
                    <div className="slide-img-container">
                      <img src={slidePair[0]} alt={`Slide ${index + 1}`} />
                    </div>
                    <div className="slide-img-container">
                      <img src={slidePair[1]} alt={`Slide ${(index + 1) % sliderImages.length + 1}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile Slider - Shows 1 image at a time with dots */}
          <div className="mobile-slider-container">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              className="mobile-swiper"
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-img-container">
                    <img src={img} alt={`Slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;