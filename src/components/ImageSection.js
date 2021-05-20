import React from "react";
import { Link } from "react-router-dom";
import CV from "../static/Akash_React_YOE1+.pdf";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Akash Singh Kushwaha</span>,
        </h4>
        <p className="about-text">
          a 23 year old web developer living in Jabalpur, India. I am a Computer
          Science graduate from Global Engineering College 2019 batch, currently
          looking for a Job as JavaScript/Reactjs Developer. I have around 2
          years of work experience in IT industry. My primary skill is
          JavaScript and open to learn new technologies.I am always excited to
          talk with great minded people.
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
