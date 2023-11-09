import React from "react";
import "./style/Projects.css";
import { Button, Card, ListGroup } from "react-bootstrap";

function Projects() {
  // Define an array of project data
  const projects = [
    {
      title: "Landing Page - Coffee Shop",
      description: "Landing Page created with React.",
      techStack: "HTML, CSS, JavaScript, React",
      demoLink: "https://codepen.io/bruno-mota/full/LYqWVdO",
      codeLink: "https://github.com/bmota1988/coffee-landing-page",
      image: "./thumbnail-coffee-shop.png",
    },
    {
      title: "Survey Form",
      description: "Survey Form created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/rNJaQde",
      codeLink: "https://github.com/bmota1988/Survey_Form",
      image: "./Survey_Form.png",
    },
    {
      title: "Form",
      description: "New Survey form created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/vYRoPWj",
      codeLink: "https://github.com/bmota1988/Survey_Form_New",
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
          // <div className="project-card" key={index}>
          //   <img src={project.image} alt={project.title} />
          //   <h3>{project.title}</h3>
          //   <p>{project.description}</p>
          //   <p>
          //     <strong>Tech Stack:</strong> {project.techStack}
          //   </p>
          //   <div className="project-links">
          //     <a
          //       href={project.demoLink}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //     >
          //       Demo
          //     </a>
          //     <a
          //       href={project.codeLink}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //     >
          //       Code
          //     </a>
          //   </div>
          // </div>
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
                    variant="dark"
                    href={project.demoLink}
                    target="_blank"
                  >
                    Demo
                  </Button>{" "}
                  <Button
                    variant="dark"
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
