import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaRegFilePdf } from "react-icons/fa";

const App = () => {
  return (
    <div className="portal-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/IMG-20210525-WA0008.jpg" alt="Menachem" className="profile-pic" />
          <h1>
            Hi, I'm <span className="highlight">Menaches</span>
          </h1>
          <p>
            Constantly learning and developing, striving to turn new ideas into real-world solutions.<br />
            Let's dive into my journey of growth and innovation.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn-primary">
              Learn About Me
            </a>
            <a href="#projects" className="btn-secondary">
              View My Work
            </a>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section className="about-me" id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I’m a Computer Science graduate with a passion for AI and software
            engineering. My projects like <strong>CareerBoost</strong> and{" "}
            <strong>FooTube</strong> are designed to solve real-world problems
            and showcase the power of technology.
          </p>
          <p>
            I believe in pushing boundaries, learning every day, and turning
            ideas into impactful solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          <a href="https://careerboost.menachem.website" target="_blank" rel="noopener noreferrer" className="project-card">

            <h3>CareerBoost</h3>
            <p>
              A data-driven platform predicting salaries and recommending career
              changes based on skills.(In progress)
            </p>
          </a>
          <a href="https://footube.menachem.website" target="_blank" rel="noopener noreferrer" className="project-card">

            <h3>FooTube</h3>
            <p>
              A media streaming platform with seamless user experience
              and backend integration.
            </p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Menachem. Let’s Connect!</p>
        <div className="social-links">
          <a href="https://github.com/MenachemP2000" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/menachem-parente-753697187" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:mendypar1@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} />
          </a>
          <a href="tel:+9720543365050" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt size={30} />
          </a>
          <a href="/CVMenachemParente.pdf" download className="btn-contact">
            <FaRegFilePdf size={30} />
          </a>
        </div>
      </footer>

    </div>
  );
};

export default App;
