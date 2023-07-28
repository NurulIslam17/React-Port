import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceHero from '../components/Hero/ServiceHero'
import ServiceList from '../components/ServiceList'
function Home() {
  return (
    <>
        <Navbar/>
        <ServiceHero/>
        <ServiceList/>
        <Footer/>
    </>
  )
}

export default Home