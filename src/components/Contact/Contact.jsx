import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-info">
          <h1 className="contact-heading">Let’s Connect</h1>
          <p className="contact-subheading">
            Interested in collaboration, partnerships, or business opportunities? Feel free to reach out and start the conversation.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <FiMapPin className="detail-icon" />
              <div className="detail-text-group">
                <span className="detail-label">Location</span>
                <p className="detail-text">
                  No.4, 1st floor, Alamathi main road,<br />
                  New vellanur, Avadi ,chennai - 600062.
                </p>
              </div>
            </div>

            <div className="detail-item">
              <FiMail className="detail-icon" />
              <div className="detail-text-group">
                <span className="detail-label">Email Address</span>
                <p className="detail-text">
                  <a href="mailto:connect@manvian.com">connect@manvian.com</a>
                </p>
              </div>
            </div>

            <div className="detail-item">
              <FiPhone className="detail-icon" />
              <div className="detail-text-group">
                <span className="detail-label">Phone</span>
                <p className="detail-text">
                  <a href="tel:+918778359643">+91 8778359643</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name*" className="form-input half-width" />
              <input type="email" placeholder="Your Email*" className="form-input half-width" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Your Phone*" className="form-input half-width" />
              <input type="text" placeholder="Location*" className="form-input half-width" />
            </div>
            <input type="text" placeholder="Company/Organization*" className="form-input full-width" />
            <textarea placeholder="Purpose for connecting*" className="form-input full-width multiline-input" rows="4"></textarea>
            
            <button type="submit" className="form-submit-button">Get In Touch</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;