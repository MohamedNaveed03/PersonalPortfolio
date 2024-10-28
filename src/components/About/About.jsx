import React from 'react';
import './About.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile2.jpg";
import { FaStar } from 'react-icons/fa';

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
            Software Engineer with over 2.5 years of experience, specializing in development, server-side management, automa
tion, API creation, and workflow optimization.Successful in developing, debugging, and delivering scalable solutions in Agile environments.           </p>
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
              <p>Git , ProofHub</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>JavaScript & React JS</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>Python & FastAPI</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
              </div>
            </div>
            <div className='about-skill'>
              <p>SQL SERVER & MYSQL</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>Java</p>
              <div className='star-rating'>
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon filled' />
                <FaStar className='star-icon' />
                <FaStar className='star-icon' />
              </div>
            </div>
            <div className='about-skill'>
              <p>C# & ASP.Net</p>
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
