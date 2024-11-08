import React, { useEffect, useState } from 'react';
import '../css/cards.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Cards = () => {
    const [cities, setCities] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current start index for visible cards

    useEffect(() => {
        // Fetch data from the Django API
        fetch('http://localhost:8000/api/cities/')
            .then(response => response.json())
            .then(data => setCities(data))
            .catch(error => console.error("Error fetching cities:", error));
    }, []);
    const visibleCards = 4; // Number of cards visible at one time

    // Handle left arrow click
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    // Handle right arrow click
    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cities.length - visibleCards));
    };
    return (
        <div className="services-container">
            <div className="title-arrow-container">
                <div className="arrow-buttons">
                    <button className="arrow-button" onClick={handlePrevious} disabled={currentIndex === 0}>
                        <FaArrowLeft />
                    </button>
                    <button className="arrow-button" onClick={handleNext} disabled={currentIndex >= cities.length - visibleCards}>
                        <FaArrowRight />
                    </button>
                </div>
                <h2 className="services-title">Our Services Available In:</h2>
            </div>
            <div className="cards-container">
                {cities.slice(currentIndex, currentIndex + visibleCards).map((city, index) => (
                    <div className="card" key={index}>
                        <img src={`${process.env.PUBLIC_URL}/${city.name}.jpg`} alt={city.name} className="card-image" />
                        <div className="card-content">
                            <h3 className="city-name">{city.name}</h3>
                            <p className="price">From: <strong className="price-value">${city.price}</strong></p>
                            <p className="date"><span className="emoji">📅</span> {city.date}</p>
                            <p className="description">{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Cards;
