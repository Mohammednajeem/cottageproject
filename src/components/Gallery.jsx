import React, { useEffect, useRef, useState } from "react";
import bgImage from "../cottageimages/image4.png";
import mgImage1 from "../cottageimages/image4-1.png";
import mgImage2 from "../cottageimages/image4-2.png";
import mgImage3 from "../cottageimages/image4-3.png";
import mgImage4 from "../cottageimages/image4-4.png";

function Gallery() {
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
      { threshold: 0.05 } // 👈 triggers earlier (reduces white gap)
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`gallery ${isVisible ? "is-visible" : ""}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="headers">A Glimpse Into Your Stay</h2>

      <div className="gallery-grid">
        <div className="outerimage">
          <div className="image-wrapper">
            <img className="ima1" src={mgImage1} alt="Room 1" />
          </div>

          <div className="innerimage">
            <div className="image-wrapper">
              <img className="ima2" src={mgImage2} alt="Campfire" />
            </div>
            <div className="image-wrapper">
              <img className="ima2" src={mgImage3} alt="Night Cottage" />
            </div>
          </div>
        </div>

        <div className="image-wrapper">
          <img className="ima4" src={mgImage4} alt="Room" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
