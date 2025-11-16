import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import PopupForm from "./components/PopupForm";
import Loader from "./components/Loader"; // 👈 we'll make this

// 💤 Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Gallery = lazy(() => import("./components/Gallery"));
const Attractions = lazy(() => import("./components/Attractions"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app">
      {/* Book Now Button */}
      <button className="book-now" onClick={() => setShowForm(true)}>
        <FaRegCalendarAlt className="book-icon" />
        BOOK NOW
      </button>

      {/* Popup Form */}
      {showForm && <PopupForm onClose={() => setShowForm(false)} />}

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Home />
        <Gallery />
        <Attractions />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;