import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLock, faUserFriends, faClipboardCheck, faGift } from '@fortawesome/free-solid-svg-icons'; // Import your desired icons
import '../css/popularPackages.css'; // Import your CSS file
const PopularPackages = () => {
    const packages = [
        {
            type: 'Light',
            price: '34$',
            image: `${process.env.PUBLIC_URL}/light.jpg`, // Path to your image
            characteristics: [
                { text: 'Grant safety', icon: faCheckCircle },
                { text: 'City app', icon: faClipboardCheck },
                { text: 'Discounts on every trip', icon: faGift },
                { text: 'Guaranteed support', icon: faUserFriends }
            ],
        },
        {
            type: 'Confidential',
            price: '56$',
            image: `${process.env.PUBLIC_URL}/confi.jpg`, // Path to your image
            characteristics: [
                { text: 'Confidential', icon: faLock },
                { text: 'Professional storage', icon: faCheckCircle },
                { text: 'Guaranteed support', icon: faUserFriends }
            ],
        },
        {
            type: 'Sensitive',
            price: '72$',
            image: `${process.env.PUBLIC_URL}/sensitive.jpg`, // Path to your image
            characteristics: [
                { text: 'Careful carrying', icon: faCheckCircle },
                { text: 'Professional storage', icon: faClipboardCheck },
                { text: 'Companion', icon: faUserFriends },
                { text: 'Professional support', icon: faClipboardCheck }
            ],
        },
        {
            type: 'Heavy',
            price: '100$',
            image: `${process.env.PUBLIC_URL}/heavy.jpg`,
            characteristics: [
                { text: 'Discount', icon: faGift },
                { text: 'Wherever you want', icon: faUserFriends },
                { text: 'Guaranteed support', icon: faCheckCircle }
            ],
        },
    ];
    return (
        <section className="popular-packages">
            <h2 className="section-title">The Most Popular Packages</h2>
            <div className="card-container">
                {packages.map((pkg, index) => (
                    <div key={index} className="package-card">
                        <img src={pkg.image} alt={pkg.type} className="package-image" />
                        <h3 className="package-type">{pkg.type}</h3>
                        <p className="package-price" style={{ color: 'orange', fontWeight: 'bold' }}>{pkg.price}</p>
                        <div className="characteristics">
                            {pkg.characteristics.map((char, charIndex) => (
                                <span key={charIndex} className="characteristic-item">
                                    <FontAwesomeIcon icon={char.icon} className="characteristic-icon" style={{ color: 'orange', margin: 10 }} />
                                    {char.text}
                                </span>
                            ))}
                        </div>
                        <button className="buy-now">Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularPackages;
