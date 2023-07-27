import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/Hero/HomeHero'
import Footer from '../components/Footer'
import MissionSec from '../components/Mission'
import Service from '../components/Service'

function Home() {
  return (
    <>
        <Navbar/>
        <HomeHero/>
        <MissionSec/>
        <Service/>
        <Footer/>
    </>
  )
}

export default Home