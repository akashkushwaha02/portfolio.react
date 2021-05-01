import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am <span> IRONMAN</span>
        </h4>
        <p className="about-text">
          lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum
          lorem ipsumlorem ipsu
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Address</p>
            <p>Nationality</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p className="">: AKASH SINGH KUSHWAHA </p>
            <p className="">: 23</p>
            <p className="">: Jabalpur</p>
            <p className="">: Indian</p>
            <p className="">: Hindi, English</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
