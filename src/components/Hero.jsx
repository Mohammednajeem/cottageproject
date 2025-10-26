import React from "react";
import { motion, px } from "framer-motion";
import bgImage from "../cottageimages/Image1.png"

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bgImage}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>The Reed's Cottage</h1>
        <p>Your Cozy Escape in the Heart of Kodaikanal</p>
        
      </motion.div>
    </section>
  );
}

export default Hero;