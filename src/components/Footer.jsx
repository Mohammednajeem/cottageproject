import React, { useEffect, useRef, useState } from "react";
import bgImage from "../cottageimages/image6.png"; // adjust path as needed
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          // use rAF to reduce layout thrash
          window.requestAnimationFrame(() => setIsVisible(true));
          try { io.unobserve(entry.target); } catch (e) {}
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);

    return () => {
      try { io.disconnect(); } catch (e) {}
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`footer ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="footer-title"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <hr className="hori" />
      <h3 id="footer-title">The Reed’s Cottage</h3>
      <p className="cozyy">Your Cozy Escape in the Heart of Kodaikanal</p>

      <div className="links">
        <a
          href="https://maps.app.goo.gl/QUakVihvWifKPTZL7"
          target="_blank"
          rel="noreferrer"
          className="cta"
        >
          <FaLocationDot /> Direction
        </a>
        <a href="tel:+919500996592" className="cta">
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
