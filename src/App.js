import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Certifications from './components/Certification/Certifications'
import Experience from './components/Experience/Experience'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Certifications></Certifications>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
    </div>
  )
}

export default App
