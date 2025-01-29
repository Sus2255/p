import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AboutMe />
        <Skills skills={["React", "JavaScript", "CSS", "HTML", "Node.js"]} />
        <Projects
          projects={[
            {
              title: "Project 1",
              description: "A web app for task management",
            },
            { title: "Project 2", description: "A personal blog platform" },
            {
              title: "Project 3",
              description: "A portfolio showcasing my skills",
            },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
