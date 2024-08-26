import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile2.jpg"

function About() {
  return (
    <div className='about'>
     <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''></img>
     </div>
     <div className='about-sections'>
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className='about-right'>
        <div className='about-para'>
            <p>Leveraged 2+ years of experience in Python development and automation, utilizing FastAPI, MongoDB, and PyQt5 to
            design and implement scalable systems and user-centric applications.Optimized performance and enhanced data management, driving efficiency and reliability in software solutions.
            </p>
        </div>
        
        <div className='about-skills'>
            <div className='about-skill'>
                <p>HTML & CSS</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className='about-skill'>
                <p>Git</p><hr style={{width:"70%"}}></hr>
            </div>
            <div className='about-skill'>
                <p>React JS</p><hr style={{width:"60%"}}></hr>
            </div>
            <div className='about-skill'>
                <p>Python</p><hr style={{width:"70%"}}></hr>
            </div>
            <div className='about-skill'>
                <p>FastAPI</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className='about-skill'>
                <p>JavaScript</p><hr style={{width:"50%"}}></hr>
            </div>
            <div className='about-skill'>
                <p>SQL</p><hr style={{width:"50%"}}></hr>
            </div>
        </div>

        </div>
     </div>
     <div className='about-achivements'>
        <div className='about-achivement'>
            <h1>2+</h1>
            <p> Years of Experience</p>
        </div>
        <hr></hr>
        <div className='about-achivement'>
            <h1>3+</h1>
            <p>Handled Projects</p>
        </div>
        <hr></hr>
        <div className='about-achivement'>
            <h1>100+</h1>
            <p>Test Case Created</p>
        </div>
     </div>
    </div>
  )
}

export default About
