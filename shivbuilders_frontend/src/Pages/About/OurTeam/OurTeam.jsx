import React, { useState } from "react";
import "./OurTeam.scss";

import review1 from "../../../assets/images/about/review1.png";
import review2 from "../../../assets/images/about/review2.png";
import review3 from "../../../assets/images/about/review3.png";

const teamMembers = [
    {
        name: "Rubi Mishra",
        role: "Principal Architect",
        img: review1,
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias totam corrupti quia quo deserunt laborum facere rerum cupiditate. Praesentium pariatur nemo eos aspernatur maiores illum quia!"
    },
    {
        name: "Raina Shaikh",
        role: "Principal Architect",
        img: review2,
        bio: "Doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id, praesentium facilis alias unde totam enim dicta reprehenderit eligendi. Maxime repellendus doloribus commodi magni assumenda."
    },
    {
        name: "Raj Goel",
        role: "Principal Architect",
        img: review3,
        bio: "Voluptatibus laudantium magnam! Non quia nulla nam voluptates dolorem, perspiciatis fugit cumque sequi aperiam vel iusto assumenda. Dolor optio sint amet impedit possimus."
    }
];

const OurTeam = () => {
    const [index, setIndex] = useState(2); // start at 3rd active

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % teamMembers.length);
    };

    return (
        <section className="team-section">
            <div className="team-wrapper">

                {/* HEADER */}
                <div className="team-header">

                    <div className="team-title-wrap">
                        <h2 className="team-title">Our Team</h2>
                        <div className="team-line"></div>
                    </div>

                    <p className="team-sub">
                        Unleashing potential through teamwork and innovation.
                        Driving excellence, one project at a time, for a brighter future.
                    </p>

                </div>

                {/* DISPLAY ROW */}
                <div className="team-row">

                    {teamMembers.map((member, i) => {
                        const isActive = i === index;

                        return (
                            <React.Fragment key={i}>

                                {/* CARD */}
                                <div className={`team-card ${isActive ? "active" : ""}`}>
                                    <img src={member.img} className="team-img" alt={member.name} />
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                </div>

                                {/* DESKTOP CONTENT (after active card) */}
                                {isActive && (
                                    <div className="team-content-box desktop-position">
                                        <p className="team-bio">{member.bio}</p>

                                        <div className="team-socials">
                                            <i className="fab fa-instagram"></i>
                                            <i className="fab fa-facebook-f"></i>
                                            <i className="fab fa-linkedin-in"></i>
                                        </div>
                                    </div>
                                )}

                            </React.Fragment>
                        );
                    })}

                </div>

                {/* MOBILE CONTENT BELOW IMAGE */}
                <div className="team-content-box mobile-content">
                    <p className="team-bio">{teamMembers[index].bio}</p>

                    <div className="team-socials">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>

                {/* ARROW */}
                <div className="team-arrow">
                    <span onClick={nextSlide}>➜</span>
                </div>

            </div>
        </section>
    );
};

export default OurTeam;
