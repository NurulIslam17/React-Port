import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactHero from '../components/Hero/ContactHero'
import ContactSection from '../components/Contact/ContactSection'
function Home() {
  return (
    <>
        <Navbar/>
        <ContactHero/>
        <ContactSection/>
        <Footer/>
    </>
  )
}

export default Home