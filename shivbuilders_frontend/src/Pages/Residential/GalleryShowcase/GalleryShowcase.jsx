import React from "react";
import "./GalleryShowcase.scss";

import imgA from "../../../assets/images/home/img1.png";
import imgB from "../../../assets/images/home/img2.png";
import imgC from "../../../assets/images/home/img3.png";
import imgD from "../../../assets/images/home/img4.png";
import imgE from "../../../assets/images/home/img5.png";
import imgF from "../../../assets/images/home/img1.png";
import imgH from "../../../assets/images/home/img2.png";

const GalleryShowcase = () => {
  return (
    <section className="gallery-showcase">
      <div className="gallery-masonry">

        {/* COLUMN 1 */}
        <div className="item card-a">
          <img src={imgA} alt="" />
          <span>Rajasthan Resident</span>
        </div>

        <div className="item card-d">
          <img src={imgD} alt="" />
          <span>Rajasthan Resident</span>
        </div>

        {/* COLUMN 2 */}
        <div className="item card-b">
          <img src={imgB} alt="" />
          <span>Dhruv Patel</span>
        </div>

        <div className="item card-e">
          <img src={imgE} alt="" />
          <span>Rajasthan Resident</span>
        </div>

        {/* COLUMN 3 */}
        <div className="item card-c">
          <img src={imgC} alt="" />
          <span>Rajasthan Resident</span>
        </div>

        <div className="item card-f">
          <img src={imgF} alt="" />
          <span>Rajasthan Resident</span>
        </div>

        {/* COLUMN 4 */}
        <div className="item gallery-text">
          <h2>Gallery</h2>
          <p>Collection</p>
        </div>

        <div className="item card-h">
          <img src={imgH} alt="" />
          <span>Raj Resident</span>
        </div>

      </div>
    </section>
  );
};

export default GalleryShowcase;
