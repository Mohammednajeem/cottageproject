import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bgImage from "../cottageimages/image3.png";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="section3"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>

      <motion.div
        className="text-content"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.3,
          ease: [0.25, 0.1, 0.25, 1], // smooth cubic easing
        }}
      >
        <p>
          At The Reed’s Cottage, it’s not just the climate — it’s the atmosphere
          that changes beautifully throughout the day. Each time of day paints a
          new scene for you to enjoy.
        </p>
      </motion.div>
    </section>
  );
}

export default Home;
