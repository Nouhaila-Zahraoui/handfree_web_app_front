import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../css/footer.css';
import logo from '../css/hand.png'; // Update the path to your logo image

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Company Logo" />
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <h3>Services</h3>
                    <ul>
                        <li>Carrying Luggage</li>
                        <li>Storage</li>
                        <li>Guiding</li>
                        <li>Transportation with luxury cars</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Home</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Tour Packages</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Help</h3>
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email Us</li>
                        <li>Find a Store</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Social Media</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="Twitter" className="social-icon">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="Facebook" className="social-icon">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Instagram" className="social-icon">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <p style={{marginLeft: 500}}>Copyright © 2024.  All rights reserved.</p>
        </footer>
    );
};

export default Footer;
