import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Te doy la bienvenida.
         <br />Mi nombre es <span className="info-name">Christian M. Fages</span>.
         <br /> Desarrollador Front-end.
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/welcome-program-img.png")}
            className="picture"
            alt="about-img"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;