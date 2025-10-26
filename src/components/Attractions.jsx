import React from "react";
import bgImage from "../cottageimages/image5.png";
import mgImage1 from "../cottageimages/kodaikanal-lake.jpg";
import mgImage2 from "../cottageimages/guna-cave.avif";
import mgImage3 from "../cottageimages/Pine-Forest.jpg";
import mgImage4 from "../cottageimages/coakers-walk.avif";
import mgImage5 from "../cottageimages/bryant-park.jpg";
import mgImage6 from "../cottageimages/pillar-rocks.jpg";
import { FaLocationDot } from "react-icons/fa6";


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
      <div className="attraction-main">
        <div className="attraction-title">
          <h2>Kodaikanal Must visit</h2>
        </div>
        <div className="attraction-visit">
          <div className="attraction-slide">
            <div className="attraction-image">
              <img src={mgImage1}></img>
            </div>
            <div classname="attraction-Content">
              <h3>Kodaikanal Lake</h3>
              <a className="attraction-links" href="https://maps.app.goo.gl/2jGVh5brj4RhmskU8"><FaLocationDot /> Route</a>
              <p className="para1" >A star-shaped man-made lake surrounded by lush greenery, perfect for boating and peaceful strolls.
Experience serenity as misty hills reflect beautifully on its calm waters.</p>
            </div>
          </div>


          <div className="attraction-slide">
            <div className="attraction-image">
              <img src={mgImage2}></img>
            </div>
            <div classname="attraction-Content">
              <h3>Guna Cave</h3>
              <a className="attraction-links" href="https://maps.app.goo.gl/7cHqhcJa2Q2uHPv49"><FaLocationDot /> Route</a>
              <p className="para1" >Mysterious and enchanting, Guna Cave is nestled deep within the forest with unique rock formations.
Its eerie charm and cinematic fame make it a must-visit for adventurers.</p>
            </div>
          </div>


          <div className="attraction-slide">
            <div className="attraction-image">
              <img src={mgImage3}></img>
            </div>
            <div classname="attraction-Content">
              <h3>Pine Forest</h3>
              <a className="attraction-links" href="https://maps.app.goo.gl/Mk6Y5ksgAyXvDsSN7"><FaLocationDot /> Route</a>
              <p className="para1" >Walk through the mesmerizing Pine Forest, where tall trees create a natural canopy of calm.
A favorite spot for photography and picnics, it captures Kodaikanal’s rustic beauty.</p>
            </div>
          </div>


          <div className="attraction-slide">
            <div className="attraction-image">
              <img src={mgImage4}></img>
            </div>
            <div classname="attraction-Content">
              <h3>Coaker's Walk</h3>
              <a className="attraction-links" href="https://maps.app.goo.gl/MtiKRsuRmSj5yifA9"><FaLocationDot /> Route</a>
              <p className="para1" >A scenic walkway along the hillside offering breathtaking panoramic views of the valley below.
Perfect for sunrise strolls and capturing the essence of Kodaikanal’s misty charm.</p>
            </div>
          </div>


          <div className="attraction-slide">
            <div className="attraction-image">
              <img src={mgImage5}></img>
            </div>
            <div classname="attraction-Content">
              <h3>Bryant Park</h3>
              <a className="attraction-links" href="https://maps.app.goo.gl/XAh4UH8bAfy7qqfD7"><FaLocationDot /> Route</a>
              <p className="para1" >A beautifully maintained botanical garden bursting with vibrant flowers and rare plant species.
An ideal spot to unwind amidst nature’s colors and fragrances near the lake.</p>
            </div>
          </div>


          <div className="attraction-slide">
            <div className="attraction-image">
              <img src={mgImage6}></img>
            </div>
            <div classname="attraction-Content">
              <h3>Pillar Rock</h3>
              <a className="attraction-links" href="https://maps.app.goo.gl/K5z7955fcaVTkRbK6"><FaLocationDot /> Route</a>
              <p className="para1">Three majestic granite pillars standing tall amidst drifting clouds and lush greenery.
A breathtaking viewpoint offering stunning vistas and a sense of timeless grandeur.</p>
            </div>
          </div>
          
        </div>
      </div>
      

      
    </section>
  );
}
