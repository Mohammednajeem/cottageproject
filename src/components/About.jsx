import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../cottageimages/image2.png";
import mgImage1 from "../cottageimages/image2-1.png";
import mgImage2 from "../cottageimages/image2-2.png";
import mgImage3 from "../cottageimages/image2-3.png";
import { FaFireAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={`about-section ${isVisible ? "is-visible" : ""}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }} // ⚡ faster entrance
    >
      <motion.p
        className="about-description"
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      >
        Nestled amidst the lush green hills of Kodaikanal, The Reed’s Cottage
        offers a perfect blend of comfort, charm, and tranquility. Whether
        you’re here for a family vacation, a weekend getaway, or a romantic
        retreat, our homestay ensures an unforgettable experience.
      </motion.p>

      <div className="about-features">
        <motion.div
          className="feature-item feat1"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        >
          <img className="aboutimg1" src={mgImage1} alt="Fireplace" />
          <p className="aboutpara1" >
            <FaFireAlt /> Fireplace & warm interiors
          </p>
        </motion.div>

        <motion.div
          className="feature-item feat2"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        >
          <img className="aboutimg2" src={mgImage2} alt="Bedroom" />
          <p className="aboutpara2" >
            <FaBed /> Cozy bedrooms with scenic views
          </p>
        </motion.div>

        <motion.div
          className="feature-item feat3"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
        >
          <img className="aboutimg3" src={mgImage3} alt="Garden" />
          <p className="aboutpara3">
            <BiWorld /> Outdoor sit-out and garden
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
