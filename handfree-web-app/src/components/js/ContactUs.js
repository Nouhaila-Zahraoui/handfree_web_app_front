import React from 'react';
import '../css/contactUs.css';
import backgroundImage from '../css/rec.png';
const ContactUs = () => {
    return (
        <section className="contact-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <h1 className="contact-title">Contact Us</h1>
                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name" style={{ marginLeft: -25 }}>Name and Surname</label>
                            <input type="text" id="name" placeholder="Name and Surname" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" style={{ marginLeft: -120 }}>Email</label>
                            <input type="email" id="email" placeholder="Email" className="form-input" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" style={{ marginLeft: -350 }}>Message</label>
                        <textarea id="message" placeholder="Your message" className="form-textarea"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
