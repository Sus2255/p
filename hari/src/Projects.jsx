import React from "react";
import "./App.css";

const Projects = ({ projects }) => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    <ul className="project-list">
      {projects.map((project, index) => (
        <li key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
