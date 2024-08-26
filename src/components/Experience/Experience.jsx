import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

function Experience() {
  return (
    <div className="experience-section" id="experience-id">
      <div className="about-title">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="Background Pattern" />
      </div>
      <div className="experience-container">
        <div className="experience-item">
          <div className="experience-content">
            <div className="company-name">Anora</div>
            <div className="experience-title">Engineer L1</div>
            <ul class="experience-description">
              <li>
                Developed Python-based automation tools for file handling,
                enhancing data retrieval speed and accuracy, and enabling over
                10 team members to focus on strategic decision-making and
                high-value tasks.
              </li>
              <li>
                Leveraged regex for advanced data extraction and pattern
                matching, improving overall data processing efficiency.
              </li>
              <li>
                Implemented thorough debugging and problem-solving strategies,
                leading to improved code stability and reliability.
              </li>
              <li>
                Designed and implemented a user-friendly desktop application
                using PyQt5, significantly improving user interaction and
                experience.
              </li>
              <li>
                Managed version control with Git, ensuring high-quality,
                consistent code and effective team collaboration.
              </li>
              <li>
                Mentored junior developers, fostering technical growth and
                adherence to best practices in software development.
              </li>
            </ul>
          
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-content">
            <div className="experience-title">Trainee Engineer</div>
            <ul class="experience-description">
              <li>
                Engineered a scalable data management system with FastAPI and
                MongoDB, reducing manual data entry by over 10 hours weekly and
                streamlining data updates and retrieval.
              </li>
              <li>
                Performed in-depth debugging and issue resolution, enhancing the
                overall reliability and performance of software systems.
              </li>
              <li>
                Optimized testing procedures, leading to reduced runtime and
                increased efficiency of test processes.
              </li>
              <li>
                Managed and updated API endpoints and test cases, ensuring high
                performance and responsiveness of the application.
              </li>
              <li>
                Utilized Git for version control, facilitating smooth code
                integration and effective project management.
              </li>
              <li>
                Integrated and optimized APIs, contributing to improved
                application performance and user responsiveness.
              </li>
              <li>
                Created and executed over 100+ test cases with pytest, ensuring
                comprehensive application testing and quality assurance.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-content">
            <div className="experience-title">
              Graduate Engineer Trainee - GET
            </div>
            <ul class="experience-description">
              <li>
                Acquired practical experience in Python and SQL through
                intensive hands-on training, applying these skills to real-world
                projects.
              </li>
              <li>
                Developed technical proficiency in programming and database
                management, solving practical problems and contributing to
                project success.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
