import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li><Link to="hero-id" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about-id" smooth={true} duration={500}>About Me</Link></li>
        <li><Link to="certification-id" smooth={true} duration={500}>Certifications</Link></li>
        <li><Link to="experience-id" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="projects-id" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact-id" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div className='nav-connect'><Link to="contact-id" smooth={true} duration={500}>Connect With Me</Link></div>
    </div>
  );
}

export default Navbar;
