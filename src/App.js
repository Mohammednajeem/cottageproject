import React, { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Home from "./components/Home"
import Gallery from "./components/Gallery";
import Attractions from "./components/Attractions";
import Footer from "./components/Footer";
import PopupForm from './components/PopupForm';
import "./App.css";
import bgImage from "./cottageimages/image3.png"




import { FaRegCalendarAlt } from "react-icons/fa";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="app">
      <button className="book-now" onClick={() => setShowForm(true)}>
        <FaRegCalendarAlt className="book-icon" />
        BOOK NOW
      </button>
      {showForm && <PopupForm onClose={() => setShowForm(false)} />}
      <Hero />
      <About />
      <Home />
      <Gallery />
    
      <Attractions/>
      <Footer />
      
    </div>
  );
}

export default App;
