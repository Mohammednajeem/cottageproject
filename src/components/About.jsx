import React from "react";
import { motion } from "framer-motion";
import bgImage from "../cottageimages/image2.png";
import mgImage1 from "../cottageimages/image2-1.png";
import mgImage2 from "../cottageimages/image2-2.png";
import mgImage3 from "../cottageimages/image2-3.png";
import { FaFireAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function About() {
  return (
    <section className="about"
  
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
      
      <p class="about-description">
    Nestled amidst the lush green hills of Kodaikanal, The Reed’s Cottage offers a perfect blend of comfort, charm, and tranquility. Whether you’re here for a family vacation, a weekend getaway, or a romantic retreat, our homestay ensures an unforgettable experience.
  </p>

  <div class="about-features">
    <div class="feature-item feat1">
      <img src={mgImage1} alt="Fireplace" />
      
      <p><FaFireAlt /> Fireplace & warm interiors</p>
    </div>

    <div class="feature-item feat2">
      <img src={mgImage2} alt="Bedroom" />
      <p><FaBed /> Cozy bedrooms with scenic views</p>
    </div>

    <div class="feature-item feat3">
      <img src={mgImage3} alt="Garden" />
      <p><BiWorld /> Outdoor sit-out and garden</p>
    </div>
  </div>
</section>
  );
}


export default About;