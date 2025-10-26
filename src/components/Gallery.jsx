import React from "react";
import { motion } from "framer-motion";
import bgImage from "../cottageimages/image4.png"
import mgImage1 from "../cottageimages/image4-1.png"
import mgImage2 from "../cottageimages/image4-2.png"
import mgImage3 from "../cottageimages/image4-3.png"
import mgImage4 from "../cottageimages/image4-4.png"

function Gallery() {
  return (
    <section className="gallery"
    style={{
        backgroundImage: `url(${bgImage}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
      
      
        <h2 className="headers">A Glimpse Into Your Stay</h2>
        <div className="gallery-grid">
          <div className="outerimage">
          <img className="ima1" src={mgImage1} alt="Room 1" />
          <div className="innerimage">
          <img className="ima2" src={mgImage2} alt="Campfire" />
          <img className="ima2" src={mgImage3} alt="Night Cottage" />
          </div>
          </div>
          <img className="ima4" src={mgImage4} alt="room" />
        </div>
      
    </section>
  );
}

export default Gallery;