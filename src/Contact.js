import React from "react";
import "./style/Contact.css"; // Import the CSS file for styling
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Contact() {
  const myContacts = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/brunonmota",
      icon: (
        <Button
          variant="success"
          href="https://www.linkedin.com/in/brunonmota"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i> Access LinkedIn
        </Button>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/bmota1988",
      icon: (
        <Button
          variant="success"
          href="https://github.com/bmota1988"
          target="_blank"
        >
          <i className="fab fa-github"></i> Access GitHub
        </Button>
      ),
    },
    {
      name: "Email",
      url: "bmota1988@gmail",
      icon: (
        <Button variant="success" href="mailto:bmota1988@gmail" target="_blank">
          <i className="fas fa-envelope"></i> Send Email
        </Button>
      ),
    },
    {
      name: "Phone",
      url: "+1(819)208-9878",
      icon: <i className="fas fa-phone"></i>,
    },
  ];

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-position">
        {myContacts.map((myContacts, index) => (
          <Card
            bg="light"
            style={{ width: "21rem", height: "11rem" }}
            className="mb-2 contact-card"
            key={index}
          >
            <Card.Header className="contact-header">
              {myContacts.name}
            </Card.Header>
            <Card.Body>
              <Card.Title className="contact-title">
                {myContacts.icon}
              </Card.Title>
              <Card.Text className="contact-text">{myContacts.url}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Contact;
