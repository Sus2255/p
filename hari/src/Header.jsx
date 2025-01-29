import React from "react";
import "./App.css";
import profilePhoto from "./assets/profile-photo.jpg"; // Replace with your image path

const Header = () => (
  <header className="header">
    {/* Profile Picture */}
    <div className="profile">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
    </div>

    {/* Navigation Links */}
    <div className="menus">
      <a href="#about-me">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
    </div>
  </header>
);

export default Header;
