import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import bgImage from "../cottageimages/Image1.png";
import logo from "../cottageimages/reedslogo.png";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // ⚡ entrance animation
    });
  }, [controls]);

  return (
    <>
      {/* ✅ Sticky Logo */}
      <div className="sticky-logo">
        <img src={logo} alt="Reed's Cottage Logo" />
      </div>

      {/* ✅ Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }} // ⚡ faster
          >
            The Reed’s Cottage
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }} // ⚡ faster
          >
            Your Cozy Escape in the Heart of Kodaikanal
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
