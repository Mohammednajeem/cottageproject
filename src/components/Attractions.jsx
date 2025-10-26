import React from "react";
import bgImage from "../cottageimages/image5.png";
import mgImage1 from "../cottageimages/image5-1.png";
import mgImage2 from "../cottageimages/image5-2.png";
import mgImage3 from "../cottageimages/image5-3.png";
import mgImage4 from "../cottageimages/image5-4.png";


export default function Attractions() {
  return (
    <section
      className="attraction-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <h1 className="attractions-title">Kodaikanal Must Visits</h1>

      <div className="gallery1">
        <div className="gallery-panel">
          <img src={mgImage1} alt="Kodaikanal attraction 1" />
        </div>
        <div className="gallery-panel">
          <img src={mgImage2} alt="Kodaikanal attraction 2" />
        </div>
        <div className="gallery-panel">
          <img src={mgImage3} alt="Kodaikanal attraction 3" />
        </div>
        <div className="gallery-panel">
          <img src={mgImage4} alt="Kodaikanal attraction 4" />
        </div>

      

      </div>
      <div className="attraction-inner">
        <div className="attraction-outer">
          <h1 className="attractions-title">Kodaikanal Lake Tourism</h1>
          <a className="links" href="">Route</a>
        </div>
        <p>Kodaikanal Lake, also known as Kodai Lake, is a man-made lake located in the Kodaikanal city of Tamil Nadu, India. This star-shaped lake is spread over an area of 60 acres and is situated at an altitude of approximately 2,286 meters (7,500 feet) above sea level. Surrounded by the lush greenery of the Palani Hills range, it serves as a focal point for tourists visiting Kodaikanal. The lake was created in 1863 by Sir Vere Henry Levinge, the then Collector of Madurai, who wanted to create an attractive</p>
      </div>

      
    </section>
  );
}
