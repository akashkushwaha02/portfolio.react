import React from "react";
import Title from "../components/Title";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

function Contact() {
  return (
    <div>
      <Title title={"Contact me"} span={"Contact me"} />
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29357.13786156819!2d80.0053262!3d23.11018905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1620700597481!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="iframe"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"7489653839"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"akash.kushwaha02@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"7489653839"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
