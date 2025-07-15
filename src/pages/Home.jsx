import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import Service from '../components/Service'
import AboutMeSection from '../components/AboutMeSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <SkillsSection/>
    <AboutMeSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}
