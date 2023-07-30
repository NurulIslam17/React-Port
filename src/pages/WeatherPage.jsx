import React from 'react'
import Navbar from '../components/Navbar'
import Weather from '../components/Weather/Weather'
import Footer from '../components/Footer'
import WeatherHero from '../components/Hero/WeatherHero'

function WeatherPage() {
  return (
    <>
        <Navbar/>
        <WeatherHero/>
        <Weather/>
        <Footer/>
    </>
  )
}

export default WeatherPage