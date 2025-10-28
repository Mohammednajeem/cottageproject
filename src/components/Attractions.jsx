import React, { useState, useEffect } from "react";
import bgImage from "../cottageimages/image5.png";
import mgImage1 from "../cottageimages/kodaikanal-lake.jpg";
import mgImage2 from "../cottageimages/guna-cave.avif";
import mgImage3 from "../cottageimages/Pine-Forest.jpg";
import mgImage4 from "../cottageimages/coakers-walk.avif";
import mgImage5 from "../cottageimages/bryant-park.jpg";
import mgImage6 from "../cottageimages/pillar-rocks.jpg";
import { FaLocationDot } from "react-icons/fa6";

export default function Attractions() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [device, setDevice] = useState("desktop");

  const attractions = [
    {
      image: mgImage1,
      title: "Kodaikanal Lake",
      link: "https://maps.app.goo.gl/f2jbbDZwRYAoaovh6",
      para: "Nestled in the heart of Kodaikanal, this star-shaped man-made lake is one of the hill station’s most iconic attractions.",
    },
    {
      image: mgImage2,
      title: "Guna Cave",
      link: "https://maps.app.goo.gl/dwTEvS8Spkxn9KdW9",
      para: "Guna Cave, also known as Devil’s Kitchen, is a mysterious and fascinating spot located amidst the dense forests of Kodaikanal.",
    },
    {
      image: mgImage3,
      title: "Pine Forest",
      link: "https://maps.app.goo.gl/7xvJpbgjRx34cmZCA",
      para: "The Pine Forest of Kodaikanal is a mesmerizing stretch of towering pine trees that create a cool, peaceful, and almost magical atmosphere.",
    },
    {
      image: mgImage4,
      title: "Coaker's Walk",
      link: "https://maps.app.goo.gl/2D11QmvUw5f8k4oMA",
      para: "Coaker’s Walk is a beautiful, paved pathway offering stunning panoramic views of the valleys and hills.",
    },
    {
      image: mgImage5,
      title: "Bryant Park",
      link: "https://maps.app.goo.gl/FpvhwattBmGrhdE6A",
      para: "Bryant Park is a vibrant botanical garden known for its colorful collection of flowers and plants.",
    },
    {
      image: mgImage6,
      title: "Pillar Rocks",
      link: "https://maps.app.goo.gl/us1DceBb9Ec1pDpm8",
      para: "Pillar Rocks are breathtaking natural formations — three giant rock pillars rising dramatically amidst misty clouds.",
    },

    {
      image: mgImage6,
      title: "Pillar Rocks",
      link: "https://maps.app.goo.gl/us1DceBb9Ec1pDpm8",
      para: "Pillar Rocks are breathtaking natural formations — three giant rock pillars rising dramatically amidst misty clouds.",
    },

    
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) setDevice("mobile");
      else if (window.innerWidth <= 992) setDevice("tablet");
      else setDevice("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () =>
    setActive((prev) => (prev - 1 + attractions.length) % attractions.length);
  const next = () => setActive((prev) => (prev + 1) % attractions.length);

  const getVisibleAttractions = () => {
    if (device === "mobile") return [attractions[active]];
    if (device === "tablet") {
      const left = (active - 1 + attractions.length) % attractions.length;
      const center = active;
      const right = (active + 1) % attractions.length;
      return [attractions[left], attractions[center], attractions[right]];
    }
    if (device === "desktop" && attractions.length > 6) {
      const visible = [];
      for (let i = 0; i < 6; i++) {
        visible.push(attractions[(active + i) % attractions.length]);
      }
      return visible;
    }
    return attractions;
  };

  const visible = getVisibleAttractions();
  const activeAttr =
    device === "desktop" && hovered !== null
      ? attractions[hovered]
      : attractions[active];

  return (
    <section
      className={`attraction-section ${
        device === "desktop" && attractions.length > 6 ? "carousel-view" : ""
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="attraction-main">
        <h2 className="attraction-title">Kodaikanal Must Visit</h2>

        <div className="carousel-container">
          <div className={`images-row ${device}`}>
            {visible.map((attr, index) => {
              const realIndex = attractions.indexOf(attr);
              const isActive = realIndex === active;
              const isHovered = hovered === realIndex;

              return (
                <div
                  key={index}
                  className={`attraction-slide ${
                    isActive ? "active" : ""
                  } ${isHovered ? "hovered" : ""}`}
                  onMouseEnter={() =>
                    device === "desktop" && setHovered(realIndex)
                  }
                  onMouseLeave={() =>
                    device === "desktop" && setHovered(null)
                  }
                  onClick={() => setActive(realIndex)}
                >
                  <img src={attr.image} alt={attr.title} />
                </div>
              );
            })}

            {(device === "tablet" ||
              device === "mobile" ||
              (device === "desktop" && attractions.length > 6)) && (
              <div className="carousel-arrows">
                <button className="left-arrow" onClick={prev}>
                  ←
                </button>
                <button className="right-arrow" onClick={next}>
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="attraction-content">
          <div className="header-row">
            <h3>{activeAttr.title}</h3>
            <a
              href={activeAttr.link}
              target="_blank"
              rel="noreferrer"
              className="attraction-links"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLocationDot /> Route
            </a>
          </div>
          <p className="para1">{activeAttr.para}</p>
        </div>
      </div>
    </section>
  );
}
