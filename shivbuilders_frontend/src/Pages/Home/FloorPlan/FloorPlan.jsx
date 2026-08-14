import React from "react";
import "./FloorPlan.scss";

import floorImg from "../../../assets/images/home/plan.png"; // your image

const FloorPlan = () => {
  return (
    <section className="floor-section">
      <div className="floor-wrapper">

        <div className="floor-image">
          <img src={floorImg} alt="Floor Plan" />
        </div>

        <div className="floor-text">
          <p>
            Describe the floor plan.<br />
            Add supporting details potential guests need to know.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FloorPlan;
