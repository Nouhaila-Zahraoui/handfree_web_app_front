import React from 'react';
import '../css/header.css';
const Header = () => {
    return (
        <header className="header">
            <div className="overlay">
                <nav className="menu">
                    <div className="menu-left">
                        <img src={`${process.env.PUBLIC_URL}/hand.png`} alt="Logo" className="logo" />
                    </div>
                    <div className="menu-center">
                        <span className="menu-item active">Home</span>
                        <span className="menu-item">About Us</span>
                        <span className="menu-item">Tour Package</span>
                        <span className="menu-item">Contact Us</span>
                    </div>
                    <div className="menu-right">
                        <span className="login">Login</span>
                        <button className="sign-up">Sign Up</button>
                    </div>
                </nav>
                <div className="header-text">
                    Enjoy in the Best Way!
                </div>
                <p>Enjoy your handfree trip anytime anywhere</p>
            </div>
        </header>
    );
};
export default Header;
