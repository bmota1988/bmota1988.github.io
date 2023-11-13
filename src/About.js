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
              width={300}
            />
          </Container>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <h4>Bruno Mota - Front-End Developer</h4>
          <p>
            Hi there! I'm Bruno Mota, a passionate and detail-oriented front-end
            developer based in Ottawa, ON. With a strong foundation in computer
            programming and a recent graduation from Algonquin College with a
            focus on web development, I am eager to contribute my skills and
            enthusiasm to a dynamic IT team.
          </p>

          <h4>Education</h4>
          <p>
            I recently completed my Computer Programming program at Algonquin
            College, where I gained expertise in various web development
            technologies such as HTML5, CSS, Bootstrap, JavaScript, PHP, and
            React. Additionally, I have hands-on experience with relational
            databases like MySQL and Oracle DB, as well as non-relational
            databases like MongoDB.
          </p>

          <h4>Skills & Abilities</h4>
          <ul>
            <li>Web Development: HTML5, CSS, JavaScript, PHP, React</li>
            <li>Relational Database: MySQL, Oracle DB</li>
            <li>Object-Oriented Programming: Java, Python, Spring</li>
            <li>Operating System: Linux, Windows</li>
            <li>Languages: Portuguese (Native), English (Professional)</li>
          </ul>

          <h4>Experience</h4>
          <p>
            Prior to transitioning into IT, I held roles in civil engineering,
            where I honed my project management and problem-solving skills. My
            experience as a Partner Driver at Uber taught me the importance of
            punctuality and customer satisfaction. As a Civil Engineering
            Trainee, I was involved in infrastructure construction projects for
            the Olympic Games Rio 2016, demonstrating my ability to oversee
            construction services and manage project details meticulously.
          </p>

          <p>
            My diverse background also includes roles such as a Sales Assistant
            at Conecval Conexões e Válvulas, where I was responsible for
            providing quotes, coordinating with suppliers, and ensuring timely
            deliveries. Additionally, my administrative assistant role at
            Partners Consultoria e Projetos involved managing internal demands,
            preparing documents, and interacting with clients.
          </p>

          <h4>Let's Connect!</h4>
          <p>
            I'm excited about the prospect of contributing to innovative IT
            projects. Feel free to reach out to me at bmota1988@gmail.com or
            connect with me on{" "}
            <a href="https://www.linkedin.com/in/brunonmota/">LinkedIn</a>.
            Let's collaborate and bring creative solutions to life!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
