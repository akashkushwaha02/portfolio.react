import React from "react";
import { Link } from "react-router-dom";
import CV from "../static/Akash_ReactJs_YOE1+.pdf";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Akash Singh Kushwaha</span>
        </h4>
        <p className="about-text">
          A 23 year old Web developer living in Jabalpur, India. I am a Computer
          Science Engineer, currently looking for a Job as Reactjs Developer.
          Have a look at my skills and connect with me on LinkedIn. I am always
          excited to talk with new and great minded people.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Akash Singh Kushwaha</p>
            <p>: 23</p>
            <p>: Indian</p>
            <p>: Hindi, English</p>
            <p>: Tilhari,Jabalpur, Madhya Pradesh</p>
          </div>
        </div>

        <button className="btn">
          <a href={CV} style={{ textDecoration: "none" }}>
            Download Cv
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
