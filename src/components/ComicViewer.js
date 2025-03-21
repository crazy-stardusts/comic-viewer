import React, { useState, useEffect } from "react";
import "../App.css";
import chatImage from "../assets/chat.webp";
import valentineImage from "../assets/valentine.webp";
import scootyImage from "../assets/scooty.webp";

const images = [
    { src: chatImage, description: " The first time we met – a simple WhatsApp chat that changed everything.", bgFilterColor: "rgba(0, 255, 0, 0.25)" },
    { src: valentineImage, description: " Our special Valentine's quiz, a night filled with laughter and love.", bgFilterColor: "rgba(255, 0, 0, 0.3)" },
    { src: scootyImage, description: " Cutu falling from Scooty after seeing me.", bgFilterColor: "rgba(0, 0, 255, 0.25)" },
];

const ComicViewer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [typedText, setTypedText] = useState("T");

    useEffect(() => {
        // Reset typedText when the page changes
        setTypedText("");
        const text = images[currentPage].description || "";
        let i = 0;

        const interval = setInterval(() => {
            if (i < text.length - 1) {
                setTypedText((prev) => prev + text[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // Typing speed

        return () => clearInterval(interval); // Cleanup on re-render
    }, [currentPage]);

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
        <div className="comic-container" style={{ "--bg-filter": images[currentPage].bgFilterColor }}>
            <h1 className="comic-header" >Cutu & Bubbu</h1>
            <img src={images[currentPage].src} alt={`Comic panel ${currentPage + 1}`} className="comic-panel" />
            {images[currentPage].description && <p className="comic-description">{typedText}</p>}
            <div className="comic-navigation">
                <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
                <button onClick={nextPage} disabled={currentPage === images.length - 1}>Next</button>
            </div>
        </div>

    );
};

export default ComicViewer;
