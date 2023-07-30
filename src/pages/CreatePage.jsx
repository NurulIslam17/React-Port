import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Create from '../components/Crud/Create'
function CreatePage() {
  return (
    <>
        <Navbar/>
        <Create/>
        <Footer/>
    </>
  )
}

export default CreatePage