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
  const [device, setDevice] = useState("desktop");

  const attractions = [
    {
      image: mgImage1,
      title: "Kodaikanal Lake",
      link: "https://maps.app.goo.gl/f2jbbDZwRYAoaovh6",
      para:
        "Nestled in the heart of Kodaikanal, this star-shaped man-made lake is one of the hill station’s most iconic attractions. Surrounded by lush green hills and tall eucalyptus trees, it offers a serene setting perfect for boating, cycling, or a peaceful stroll.",
    },
    {
      image: mgImage2,
      title: "Guna Cave",
      link: "https://maps.app.goo.gl/dwTEvS8Spkxn9KdW9",
      para:
        "Guna Cave, also known as Devil’s Kitchen, is a mysterious and fascinating spot located amidst the dense forests of Kodaikanal. Named after the Tamil movie Guna that was filmed here, the cave offers breathtaking views of the valleys below.",
    },
    {
      image: mgImage3,
      title: "Pine Forest",
      link: "https://maps.app.goo.gl/7xvJpbgjRx34cmZCA",
      para:
        "The Pine Forest of Kodaikanal is a mesmerizing stretch of towering pine trees that create a cool, peaceful, and almost magical atmosphere. Perfect for nature lovers and photographers alike.",
    },
    {
      image: mgImage4,
      title: "Coaker's Walk",
      link: "https://maps.app.goo.gl/2D11QmvUw5f8k4oMA",
      para:
        "Coaker’s Walk is a beautiful, paved pathway offering stunning panoramic views of the valleys and hills. On clear days, you can even see the city of Madurai from here.",
    },
    {
      image: mgImage5,
      title: "Bryant Park",
      link: "https://maps.app.goo.gl/FpvhwattBmGrhdE6A",
      para:
        "Bryant Park is a vibrant botanical garden known for its colorful collection of flowers and plants. A perfect spot for relaxation and photography.",
    },
    {
      image: mgImage6,
      title: "Pillar Rocks",
      link: "https://maps.app.goo.gl/us1DceBb9Ec1pDpm8",
      para:
        "Pillar Rocks are breathtaking natural formations — three giant rock pillars rising dramatically amidst misty clouds, offering stunning views and a mystical vibe.",
    },
  ];

  // Detect device type
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) setDevice("mobile");
      else if (window.innerWidth <= 992) setDevice("tablet");
      else setDevice("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prev & Next buttons
  const prev = () => {
    setActive((prev) => (prev === 0 ? attractions.length - 1 : prev - 1));
  };

  const next = () => {
    setActive((prev) => (prev === attractions.length - 1 ? 0 : prev + 1));
  };

  // Get visible images
  const getVisibleAttractions = () => {
    if (device === "mobile") return [attractions[active]];
    if (device === "tablet") {
      const start = active;
      const indices = [
        start % attractions.length,
        (start + 1) % attractions.length,
        (start + 2) % attractions.length,
      ];
      return indices.map((i) => attractions[i]);
    }
    return attractions;
  };

  // Get text for current visible slide
  const getActiveAttraction = () => {
    if (device === "tablet") {
      const visible = getVisibleAttractions();
      return visible[1];
    }
    return attractions[active];
  };

  const activeAttr = getActiveAttraction();

  return (
    <section
      className="attraction-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="attraction-main">
        <div className="attraction-title">
          <h2>Kodaikanal Must Visit</h2>
        </div>

        <div className="carousel-container">
          <div className={`images-row ${device}`}>
            {getVisibleAttractions().map((attr, index) => (
              <div
                key={index}
                className={`attraction-slide ${
                  device === "desktop" && active === attractions.indexOf(attr)
                    ? "active"
                    : ""
                }`}
                onMouseEnter={() =>
                  device === "desktop" && setActive(attractions.indexOf(attr))
                }
              >
                <div className="attraction-image">
                  <img src={attr.image} alt={attr.title} />
                </div>
              </div>
            ))}
          </div>

          {(device === "mobile" || device === "tablet") && (
            <div className="carousel-arrows">
              <button className="prev" onClick={prev}>
                ←
              </button>
              <button className="next" onClick={next}>
                →
              </button>
            </div>
          )}
        </div>

        <div key={activeAttr.title} className="attraction-content">
          <div className="header-row">
            <h3>{activeAttr.title}</h3>
            <a
              className="attraction-links"
              href={activeAttr.link}
              target="_blank"
              rel="noreferrer"
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
