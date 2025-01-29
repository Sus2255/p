import React from "react";
import "./App.css";

const Skills = ({ skills }) => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
