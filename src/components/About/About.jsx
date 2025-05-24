import React from 'react';
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile2.jpg";
function About() {
  return (
    <div className='about' id='about-id'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt='Background Pattern' />
      </div>
      <div className='about-sections'>
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
            Software Engineer with over 3 years of experience, specializing in development, server-side management, automation, API creation, and workflow optimization.Successful in developing, debugging, and delivering scalable solutions in Agile environments.           </p>
          </div>
          <div className="about-skills">
  <h3>Technical Skills</h3>
  <ul className="skills-list">
    {/* Frontend */}
    <li className="skill-item"><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>

    {/* Backend */}
    <li className="skill-item"><strong>Backend:</strong> Python, FastAPI, C#, ASP.NET</li>

    {/* Databases */}
    <li className="skill-item"><strong>Databases:</strong> SQL Server, MySQL, MongoDB</li>

    {/* Tools */}
    <li className="skill-item"><strong>Tools:</strong> Git, Docker, Version Control</li>

    {/* Data & Analysis */}
    <li className="skill-item"><strong>Data & Analysis:</strong> Pandas, Matplotlib, Web Scraping, File Handling, Regex</li>

    {/* Other */}
    <li className="skill-item"><strong>Other:</strong> Debugging, PyQt5 (Desktop App Development)</li>
  </ul>
</div>


        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>3+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>3+</h1>
          <p>Handled Projects</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>100+</h1>
          <p>Test Cases Created</p>
        </div>
      </div>
    </div>
  );
}

export default About;
