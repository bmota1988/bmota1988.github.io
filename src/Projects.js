import React from "react";
import "./style/Projects.css";
import { Button, Card, ListGroup } from "react-bootstrap";

function Projects() {
  // Define an array of project data
  const projects = [
    {
      title: "Landing Page - Coffee Shop",
      description: "Landing Page created with React and Bootstrap.",
      techStack: "HTML, CSS, JavaScript, React, and Bootstrap",
      demoLink: "https://landingpage-coffee-shop.netlify.app/",
      codeLink: "https://github.com/bmota1988/coffee-landing-page",
      image: "./thumbnail-coffee-shop.png",
    },
    {
      title: "Gym Survey Form",
      description: "Survey Form created with React, and Bootstrap.",
      techStack: "HTML, CSS, JS, React, and Bootstrap",
      demoLink: "https://gym-form-react.netlify.app/",
      codeLink: "https://github.com/bmota1988/gym-form-react",
      image: "./Survey_Form.png",
    },
    {
      title: "Generic Survey Form",
      description:
        "Generic Survey Form created with React and React Bootstrap.",
      techStack: "React, React Bootstrap",
      demoLink: "https://generic-form-survey.netlify.app/",
      codeLink: "https://github.com/bmota1988/Generic-Survey-Form",
      image: "./Form.png",
    },
    {
      title: "Technical Documentation",
      description: "Technical Documentation created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/OJQPGbK",
      codeLink: "https://github.com/bmota1988/Technical_Documentation",
      image: "./Documentation.png",
    },
    {
      title: "Portfolio Page",
      description: "Portfolio Page created with HTML, CSS, and JavaScript.",
      techStack: "HTML, CSS, JavaScript",
      demoLink: "https://codepen.io/bruno-mota/full/mdLVjBb",
      codeLink: "https://github.com/bmota1988/Portfolio_Page",
      image: "./Portfolio.png",
    },
    {
      title: "Tribute Page",
      description: "Tribute Page created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/yLvyQzB",
      codeLink: "https://github.com/bmota1988/Tribute_Page",
      image: "./Tribute_Page.png",
    },
  ];

  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Card className="project-card" style={{ width: "20rem" }} key={index}>
            <Card.Img
              variant="top"
              src={project.image}
              alt={project.title}
              width={100}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{project.description}</ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant="success"
                    href={project.demoLink}
                    target="_blank"
                  >
                    Demo
                  </Button>{" "}
                  <Button
                    variant="success"
                    href={project.codeLink}
                    target="_blank"
                  >
                    Code
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
