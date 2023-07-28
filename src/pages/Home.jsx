import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/Hero/HomeHero'
import Footer from '../components/Footer'
import MissionSec from '../components/Mission'
import Service from '../components/Service'
import CustomerReview from '../components/Home/CustomerReview'

function Home() {
  return (
    <>
        <Navbar/>
        <HomeHero/>
        <MissionSec/>
        <Service/>
        <CustomerReview/>
        <Footer/>
    </>
  )
}

export default Home