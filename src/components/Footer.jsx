import React, { useEffect, useRef, useState } from "react";
import bgImage from "../cottageimages/image6.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animation
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`footer ${isVisible ? "is-visible" : ""}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <hr className="hori" />
      <h3>The Reed’s Cottage</h3>
      <p className="cozyy">Your Cozy Escape in the Heart of Kodaikanal</p>

      <div className="links">
        <a
          href="https://maps.app.goo.gl/QUakVihvWifKPTZL7"
          target="_blank"
          rel="noreferrer"
        >
          <FaLocationDot /> Direction
        </a>
        <a href="tel:+919500996592">
          <FaPhoneAlt /> +91 9500996592
        </a>
      </div>

      <p className="para2">
        17, Attuvampatty, near Mother Teresa Women's University, Kodaikanal, TN
        624101
      </p>
    </footer>
  );
}

export default Footer;
