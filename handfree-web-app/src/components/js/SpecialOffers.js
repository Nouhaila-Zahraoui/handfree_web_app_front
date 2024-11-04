import React from 'react';
import '../css/specialOffers.css';
const SpecialOffers = () => {
    return (
        <div className="special-offers-container">
            <div className="content">
                <div className="text-container">
                    <h2 className="offers-title">Get Special Offers for Organizations</h2>
                    <p className="offers-text">
                        Get your luggage transported or securely stored for half the price if you log in.
                    </p>
                    <button className="login-button">Login</button>
                </div>
                <img src={`${process.env.PUBLIC_URL}/woman.png`} alt="Woman" className="woman-image" />
            </div>
        </div>
    );
};

export default SpecialOffers;
