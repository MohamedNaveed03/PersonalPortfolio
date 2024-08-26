import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const handleDownloadClick = () => {
    alert('Submitted successfully');
  };
  return (
    <div className="contact-section" id="contact-id">
      <div className="about-title">
        <h1>Contact</h1>
        <img src={theme_pattern} alt="Background Pattern" />
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p><FaEnvelope className="contact-icon" /> <a href="mailto:naveedmohamed870@gmail.com">naveedmohamed870@gmail.com</a></p>
          <p><FaLinkedin className="contact-icon" />  <a href="https://www.linkedin.com/in/mohamednaveed/" target="_blank" rel="noopener noreferrer">Connect with me in Linkedin</a></p>
          <p><FaGithub className="contact-icon" /> <a href="https://github.com/MohamedNaveed03" target="_blank" rel="noopener noreferrer">Connect with me in GitHub</a></p>
          <p><FaPhone className="contact-icon" /> +91 6383587503</p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Write your message here"></textarea>
            </div>
            <button type="submit" onClick={handleDownloadClick}>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
