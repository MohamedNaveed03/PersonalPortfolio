import React from 'react';
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile2.jpg";
import { FaStar } from 'react-icons/fa'; // Import Font Awesome stars

function About() {
  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt='Background Pattern'></img>
      </div>
      <div className='about-sections'>
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>
              Leveraged 2+ years of experience in Python development and automation, utilizing FastAPI, MongoDB, and PyQt5 to
              design and implement scalable systems and user-centric applications. Optimized performance and enhanced data management, driving efficiency and reliability in software solutions.
            </p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>Git</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>React JS</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>Python</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
              </div>
            </div>
            <div className='about-skill'>
              <p>FastAPI</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>JavaScript</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>SQL</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>2+</h1>
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
