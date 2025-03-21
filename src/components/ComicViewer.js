import React, { useState, useEffect } from "react";
import "../App.css";
import chatImage from "../assets/chat.webp";
import valentineImage from "../assets/valentine.webp";
import scootyImage from "../assets/scooty.webp";
import handImage from "../assets/hand.webp";
import kissImage from "../assets/kiss.webp";
import bikeImage from "../assets/bike.webp";
import momoImage from "../assets/momo.webp";
import assignmentImage from "../assets/assignment.webp";
import airportImage from "../assets/airport.webp";
import dateImage from "../assets/date.webp";
import longImage from "../assets/long.webp";
import codingImage from "../assets/coding.webp";
import bangloreImage from "../assets/banglore.webp";
import amazonImage from "../assets/amazon.webp";
import togetherImage from "../assets/together.webp";

const images = [
    { src: chatImage, description: " The first time Cutu & Bubby met – a simple WhatsApp chat that changed everything.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: valentineImage, description: " The special Valentine's quiz, a night filled with laughter and love.", bgFilterColor: "rgba(255, 0, 0, 0.3)", bgTextColor: "rgba(255, 0, 0, 0.8)" },
    { src: scootyImage, description: " Cutu falling from Scooty after seeing Bubby for the first time, a moment that felt like a dream.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: handImage, description: " The first time Bubby asking permission to hold hand.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: kissImage, description: " The first kiss, a moment that made time stand still.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: bikeImage, description: " Cutu & Bubby going to Sector-27 like daily ritual.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: momoImage, description: " And now can we forget the momos of Sector-27?", bgFilterColor: "rgba(255, 0, 0, 0.3)", bgTextColor: "rgba(255, 0, 0, 0.8)" },
    { src: longImage, description: " Cutu & Bubby in long distance, daily ritual of meets & calls.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: assignmentImage, description: " Cutu writing assignments for careless Bubby.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: dateImage, description: " Cutu & Bubby going to the infamous Sayaji date, aka, the best date ever", bgFilterColor: "rgba(255, 0, 0, 0.3)", bgTextColor: "rgba(255, 0, 0, 0.8)" },
    { src: airportImage, description: " Bubby coming over to see Cutu at Raipur.",  bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)"},
    { src: codingImage, description: " Bubby teaching coding to Cutu.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: bangloreImage, description: " Cutu & Bubby in Banglore, a new chapter in our lives.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
    { src: amazonImage, description: " Cutu getting placed in Amazon, taking Bubby's revenge.", bgFilterColor: "rgba(255, 0, 0, 0.3)", bgTextColor: "rgba(255, 0, 0, 0.8)" },
    { src: togetherImage, description: " And now Cutu & Bubby are together, forever.", bgFilterColor: "rgba(235, 243, 8, 0.25)", bgTextColor: "rgba(177, 129, 33, 0.84)" },
];

const ComicViewer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
        setIsLoading(false);
    }, []);

    useEffect(() => {
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
        }, 30);
        return () => clearInterval(interval);
    }, [currentPage]);

    const nextPage = () => currentPage < images.length - 1 && setCurrentPage(currentPage + 1);
    const prevPage = () => currentPage > 0 && setCurrentPage(currentPage - 1);

    if (isLoading) return <div className="loading-screen">Loading comic...</div>;

    return (
        <div className="comic-container" style={{ "--bg-filter": images[currentPage].bgFilterColor }}>
            <h1 className="comic-header">Cutu & Bubbu</h1>
            <div style={{ display: "none" }}>
                {images.map((image, index) => <img key={index} src={image.src} alt="preload" />)}
            </div>
            <img src={images[currentPage].src} alt={`Comic panel ${currentPage + 1}`} className="comic-panel" />
            {images[currentPage].description && (
                <p className="comic-description" style={{ background: images[currentPage].bgTextColor }}>
                    {typedText}
                </p>
            )}
            <div className="comic-navigation">
                <button onClick={prevPage} disabled={currentPage === 0}>Previous</button>
                <button onClick={nextPage} disabled={currentPage === images.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default ComicViewer;