import React from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/Hero/AboutHero'
import Member from '../components/Team/Member'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
        <Navbar/>
        <AboutHero/>
        <Member/>
        <Footer/>
    </>
  )
}

export default Home