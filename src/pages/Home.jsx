import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import Service from '../components/Service'
import AboutMeSection from '../components/AboutMeSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <Projects/>
    <SkillsSection/>
    <AboutMeSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}
