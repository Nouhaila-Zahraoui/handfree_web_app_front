import React from 'react';
import '../css/happyCustomers.css';
import customer1Image from '../css/man.jpg';
const testimonials = [
    {
        image: 'customer1.jpg',
        text: "The service was outstanding! I felt like my belongings were treated with the utmost care and professionalism. Not only was the process seamless, but the pricing was also fantastic for the quality provided. Highly recommended for anyone in need of secure luggage transport. I’ll definitely use this service again!",
    },
    {
        image: 'customer2.jpg', // Replace with the path to your image
        text: "I’m so happy with my experience! The team went above and beyond to ensure my package was handled with care, and the support was available whenever I needed it. This service truly delivers on its promise, and I couldn’t be more grateful. Will recommend to friends and family!",
    }
];
const HappyCustomers = () => {
    return (
        <div className="happy-customers">
            <div className="header-row">
                <h2 className="title">Happy Customers Say</h2>
                <div className="icon-container">
                    <button className="nav-icon">‹</button>
                    <button className="nav-icon active">›</button>
                </div>
            </div>
            <div className="cards-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="card">
                        <img src={customer1Image} alt="Customer 1" className="customer-image" />
                        <div className="quote">
                            <span className="quote-mark">“</span>
                            <p>{testimonial.text}</p>
                            <span className="quote-mark">”</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HappyCustomers;
