import React from "react";
import "./style/Contact.css"; // Import the CSS file for styling

function Contact() {
  return (
    <div className="contact-container content-below-header">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        {/* LinkedIn Contact Card */}
        <a href="https://www.linkedin.com/in/brunonmota">
          <div className="contact-card">
            <i className="contact-icon fab fa-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>https://www.linkedin.com/in/brunonmota</p>
          </div>
        </a>

        {/* GitHub Contact Card */}
        <a href="https://github.com/bmota1988">
          <div className="contact-card">
            <i className="contact-icon fab fa-github"></i>
            <h3>GitHub</h3>
            <p>https://github.com/bmota1988</p>
          </div>
        </a>

        {/* Email Contact Card */}
        <a href="mailto:bmota1988@gmail">
          <div className="contact-card">
            <i className="contact-icon fas fa-envelope"></i>
            <h3>Email</h3>
            <p>bmota1988@gmail.com</p>
          </div>
        </a>

        {/* Phone Contact Card */}
        <div className="contact-card">
          <i className="contact-icon fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+1(819)208-9878</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
