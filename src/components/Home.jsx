import React from "react";
import { motion, px } from "framer-motion";
import bgImage from "../cottageimages/image3.png"

function Home() {
  return (
    <section className="section3"
    style={{ backgroundImage: `url(${bgImage}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
       }}>
      <div className="overlay"></div>
      <div className="text-content">
        <p>
          At The Reed’s Cottage, it’s not just the climate — it’s the atmosphere
          that changes beautifully throughout the day. Each time of day paints a
          new scene for you to enjoy.
        </p>
      </div>
    </section>
  );
}

export default Home;