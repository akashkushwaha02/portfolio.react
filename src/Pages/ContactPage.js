import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"About"} span={"About"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14677.909170470308!2d79.98085099999999!3d23.116223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1621253739048!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text1={"+91 7489653839"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"akash.kushwaha02@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Tilhari, Jabalpur, Madhya Pradesh"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
