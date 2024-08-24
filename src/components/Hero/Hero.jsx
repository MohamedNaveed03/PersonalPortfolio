import React from 'react'
import './Hero.css'
import profile_img from '../../assets/circleimg.jpg'
function Hero() {
  return (
    <div className='hero'>
      <img src={profile_img} alt=''></img>
      <h1><span>I'm Mohamed Naveed,</span> Software Engineer.</h1>
      <p>Software Engineer from India with 2+ years of experience in Software Developement and Python Automation.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect With Me</div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
