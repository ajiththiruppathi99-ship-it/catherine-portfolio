import React, { useState } from 'react';
import './Contact.css';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    company: '',
    purpose: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState('');

 const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("loading");
  setStatusMsg("");

  try {
    const response = await fetch("https://catherine-port-backend.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("success");
      setStatusMsg("Message sent successfully!");

      // ✅ clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        company: "",
        purpose: "",
      });
    } else {
      setStatus("error");
      setStatusMsg(data.error || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
    setStatusMsg("Server error. Try again.");
  }
};

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-info">
          <h1 className="contact-heading">Let's Connect</h1>
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

        {/* Right Column – Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="form-input half-width"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                className="form-input half-width"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone*"
                className="form-input half-width"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location*"
                className="form-input half-width"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company/Organization*"
              className="form-input full-width"
              value={formData.company}
              onChange={handleChange}
            />
            <textarea
              name="purpose"
              placeholder="Purpose for connecting*"
              className="form-input full-width multiline-input"
              rows="4"
              value={formData.purpose}
              onChange={handleChange}
            />

            {/* Status Message */}
            {statusMsg && (
              <p className={`form-status-msg ${status}`}>{statusMsg}</p>
            )}

            <button
              type="submit"
              className="form-submit-button"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Get In Touch'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;