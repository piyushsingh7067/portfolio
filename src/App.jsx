import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Container from './components/Conatiner'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import { motion } from 'motion/react'
import BreathingBackground from './components/Breathing'
import Resume from './components/Resume'

function App() {
 

  return (
    <>
    <div className='relative overflow-hidden min-h-screen scroll-smooth'>
    <Container>
      <Navbar/>
      <Hero/>
      <Resume/>
      <Skills/>
      <Project/>
      <Footer/>
    </Container>
    <BreathingBackground/>
</div>
    </>
  )
}

export default App