import React from 'react';
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Project.css";

function Project() {
  return (
    <div className='project-section' id='projects-id'>
      <div className="about-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Background Pattern" />
      </div>

      <div className='project-container'>
      <div class="project-card">
    <h2 class="project-name">SiTime Web Page Development</h2>
    <div class="project-skills">
        <span>FastAPI</span>
        <span>MongoDB</span>
        <span>CRUD</span>
        <span>API Testing</span>
        <span>Git</span>
    </div>
    <p class="project-description">
        Developed a comprehensive web page for SiTime, featuring device configuration capabilities. Implemented a full CRUD system for device settings and created test cases to ensure robust API functionality. Utilized FastAPI as the primary framework, with MongoDB for database handling, and Git for effective team collaboration.
    </p>
</div>


<div class="project-card">
    <h2 class="project-name">Fusion to 93k</h2>
    <div class="project-skills">
        <span>Python</span>
        <span>Git</span>
        <span>File Handling</span>
    </div>
    <p class="project-description">
        Developed a Python automation script to read and process CSV files for the Fusion to 93k project. The script separates serial and parallel vectors from the data and manages all associated scripts to ensure efficient operation within the Fusion system.
    </p>
</div>

        
<div class="project-card">
    <h2 class="project-name">Desktop Application Using PyQt5</h2>
    <div class="project-skills">
        <span>Python</span>
        <span>PyQt5</span>
        <span>Git</span>
        <span>PyQt5 Designer</span>
        <span>Pandas</span>
    </div>
    <p class="project-description">
        Developed a desktop application using PyQt5 to efficiently maintain and track lot testing processes. Designed the graphical user interface with PyQt5 Designer and implemented backend functionality using Python. Managed the project and version control with Git.
    </p>
</div>

<div class="project-card">
    <h2 class="project-name">Tawhid Leathers - Webpage</h2>
    <div class="project-skills">
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>Git</span>
    </div>
    <p class="project-description">
        As a freelancer, developed a professional webpage for Tawhid Leather Company to effectively present their services. Collaborated directly with the client to understand their needs and managed a team of 2+ members to deliver the project. Employed JavaScript, HTML, CSS, and React for development, with Git used for seamless collaboration and version control.
    </p>
</div>

        
      </div>
    </div>
  );
}

export default Project;
