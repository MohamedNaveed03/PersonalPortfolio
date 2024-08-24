import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt=''></img>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar
