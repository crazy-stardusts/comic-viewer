import React, { useState } from "react";
import "../App.css";
import chatImage from "../assets/chat.webp";
import valentineImage from "../assets/valentine.webp";

const images = [
  { src: chatImage, description: "The first time we met – a simple WhatsApp chat that changed everything." },
  { src: valentineImage, description: "Our special Valentine's quiz, a night filled with laughter and love." }
];

const ComicViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="comic-container">
      <h1 className="comic-header">Our Story</h1>
      <img src={images[currentPage].src} alt={`Comic panel ${currentPage + 1}`} className="comic-panel" />
      {images[currentPage].description && <p className="comic-description styled-description">{images[currentPage].description}</p>}
      <div className="comic-navigation">
        <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === images.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default ComicViewer;
