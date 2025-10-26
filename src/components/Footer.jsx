import React from "react";
import bgImage from "../cottageimages/image6.png"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}>

      <hr className="hori"/>
      <h3>The Reed’s Cottage</h3>
      <p className="cozyy">Your Cozy Escape in the Heart of Kodaikanal</p>
      <div className="links">
        <a href=""><FaLocationDot /> Direction</a>
        <a href=""><FaPhoneAlt /> +91 9500996592</a>
      </div>
      <p>17, Attuvampatty, near Mother Teresa Women's University, Kodaikanal, TN 624101</p>
      
    </footer>
  );
}

export default Footer;