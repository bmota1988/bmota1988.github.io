import React from "react";
import "./style/About.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function About() {
  return (
    <section className="about-container">
      <div className="about-content content-below-header">
        <div className="about-image">
          <Container>
            <Image
              src="perfil_Bruno_Mota.jpg"
              alt="Bruno Mota"
              rounded
              width={350}
            />
          </Container>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Bruno Mota, an aspiring IT professional with a strong
            foundation in web development, databases, and object-oriented
            programming. I'm currently pursuing a degree in Computer Programming
            at Algonquin College in Ottawa, set to graduate in August 2023. My
            education has equipped me with skills in HTML5, CSS, JavaScript,
            PHP, React, MySQL, and Oracle DB.
          </p>
          <p>
            My academic journey extends to a degree in Civil Engineering from
            Universidade Veiga de Almeida in Rio de Janeiro. In addition to my
            technical skills, I'm proficient in Portuguese (native) and English
            (professional level).
          </p>
          <p>
            My professional experiences are diverse, including roles as a
            Partner Driver at Uber, where I ensured timely transportation and
            customer satisfaction, and as a Civil Engineering Trainee, where I
            contributed to infrastructure construction and project management.
            I've also worked in customer service and document management in a
            small business consulting company, supporting various projects.
          </p>
          <p>
            I'm passionate about technology and problem-solving. My goal is to
            secure a client-oriented position within the IT industry, leveraging
            my skills, knowledge, and experiences to deliver optimal results for
            organizations and their valued clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
