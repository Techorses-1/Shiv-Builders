import React, { useState, useEffect, lazy, Suspense } from "react";
import "./AchievementsSlider.scss";

const ImageModalSlider = lazy(() =>
    import("./Model/ImageModalSlider")
);



import img1 from "../../../assets/images/resindential/resident1.jpg";
import img2 from "../../../assets/images/resindential/resident2.jpg";
import img3 from "../../../assets/images/resindential/resident3.jpg";
import img4 from "../../../assets/images/resindential/resident4.jpg";
import img5 from "../../../assets/images/resindential/resident5.jpg";
import img6 from "../../../assets/images/resindential/resident6.jpg";
import img7 from "../../../assets/images/resindential/resident7.jpg";
import img8 from "../../../assets/images/resindential/resident8.jpg";
import img9 from "../../../assets/images/resindential/resident9.jpg";
import img10 from "../../../assets/images/resindential/resident10.jpg";
import img11 from "../../../assets/images/resindential/resident11.jpg";
import img12 from "../../../assets/images/resindential/resident12.jpg";
import img13 from "../../../assets/images/resindential/resident13.jpg";
import img14 from "../../../assets/images/resindential/resident14.jpg";
import img14_1 from "../../../assets/images/resindential/resident14-1.jpg";
import img14_2 from "../../../assets/images/resindential/resident14-2.jpg";



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
        id: 3,
        image: img3,
        text: "Modern Homes – Ahmedabad",
        gallery: [img3],
    },
    {
        id: 4,
        image: img14,
        text: "NextGen Homes – Chennai",
        gallery: [img14, img1 , img14_1, img14_2],
    },
    {
        id: 5,
        image: img5,
        text: "Urban Projects – Delhi",
        gallery: [img5],
    },
    {
        id: 6,
        image: img6,
        text: "Skyline Infra – Surat",
        gallery: [img6],
    },
    {
        id: 7,
        image: img7,
        text: "Prime Residences – Jaipur",
        gallery: [img7],
    },
    {
        id: 8,
        image: img8,
        text: "Green Valley – Indore",
        gallery: [img8],
    },
    {
        id: 9,
        image: img9,
        text: "Luxury Living – Hyderabad",
        gallery: [img9],
    },
    {
        id: 10,
        image: img10,
        text: "Heritage Homes – Udaipur",
        gallery: [img10],
    },
    {
        id: 11,
        image: img11,
        text: "Smart Spaces – Noida",
        gallery: [img11],
    },
    {
        id: 12,
        image: img12,
        text: "Royal Estates – Jodhpur",
        gallery: [img12],
    },
    {
        id: 13,
        image: img13,
        text: "Blue Sky Projects – Kochi",
        gallery: [img13],
    },
    {
        id: 14,
        image: img4,
        text: "Elite Spaces – Bengaluru",
        gallery: [img4],
    },
];




const AchievementsSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = window.innerWidth <= 768;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalText, setModalText] = useState("");




    // Auto slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Smooth infinite slide - no jump
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 3000); // 2 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const getClass = (index) => {
        const total = slides.length;

        // 🔹 MOBILE: simple slider
        if (isMobile) {
            if (index === activeIndex) return "slide mobile-active";
            if (index === (activeIndex - 1 + total) % total)
                return "slide mobile-prev";
            if (index === (activeIndex + 1) % total)
                return "slide mobile-next";
            return "slide mobile-hidden";
        }

        // 🔹 DESKTOP: KEEP AS-IS (NO CHANGE)
        if (index === activeIndex) return "slide center";
        if (index === (activeIndex - 1 + total) % total) return "slide left";
        if (index === (activeIndex + 1) % total) return "slide right";
        if (index === (activeIndex + 2) % total) return "slide hidden-right";
        return "slide hidden-left";
    };



    return (
        <section className="achievements-section">
            <h2>Residential</h2>

            <div className="slider-wrapper">
                <div className="slider">
                    {slides.map((item, index) => (
                        <div
                            className={getClass(index)}
                            key={item.id}
                            onClick={() => {
                                if (index === activeIndex) {
                                    setModalImages(item.gallery);
                                    setModalText(item.text);
                                    setIsModalOpen(true);
                                }
                            }}
                        >
                            <img
                                src={item.image}
                                alt="Construction Project"
                                loading="lazy"
                            />

                            {/* TEXT INSIDE CENTER IMAGE */}
                            {/* {index === activeIndex && (
                                <div className="slide-text">
                                    {item.text}
                                </div>
                            )} */}
                        </div>

                    ))}
                </div>


            </div>


            {isModalOpen && (
                <Suspense fallback={null}>
                    <ImageModalSlider
                        images={modalImages}
                        // text={modalText}  
                        onClose={() => setIsModalOpen(false)}
                    />
                </Suspense>
            )}


        </section>
    );
};

export default AchievementsSlider;