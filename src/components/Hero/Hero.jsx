import React from 'react';
import './Hero.css';
import profile_img from '../../assets/circleimg.jpg';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div className='hero' id='hero-id'>
      <img src={profile_img} alt='Profile'></img>
      <h1>I'm <span>Mohamed Naveed,</span> Software Engineer.</h1>
      <p>Software Engineer from India with 3+ years of experience in Software Development and Python Automation.</p>
      <div className='hero-action'> 
        <div className='hero-connect'>
          <Link to="contact-id" smooth={true} duration={500}>Connect With Me</Link>
        </div>
        <div className='hero-resume'>
          <a href="MohamedNaveed-SDE-Resume.pdf" download="MohamedNaveed-SDE-Resume.pdf" className="resume-link">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
