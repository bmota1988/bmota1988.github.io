import React from "react";
import "./style/Projects.css"; // Import the CSS file for the Projects component

function Projects() {
  // Define an array of project data
  const projects = [
    {
      title: "Tribute Page",
      description: "Tribute Page created with HTML, and CSS.",
      techStack: "HTML, CSS",
      demoLink: "https://codepen.io/bruno-mota/full/yLvyQzB",
      codeLink: "https://github.com/bmota1988/Tribute_Page",
      image: "./Tribute_Page.png",
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
  ];

  return (
    <section className="projects-container content-below-header">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
