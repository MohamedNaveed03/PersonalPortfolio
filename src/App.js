import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Certifications from './components/Certification/Certifications'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Certifications></Certifications>
      <Experience></Experience>
      <Project></Project>
    </div>
  )
}

export default App
