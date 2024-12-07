import React from 'react'
import Navbar from '../Components/common/Navbar'
import Footer from '../Components/common/Footer'
import AboutMainSection from '../Components/core/AboutPage/AboutMainSection'
import Course from '../Components/core/HomePage/Courses'

const About = () => {
  return (
    <div className='mt-12 bg-gray-50'>
      <Navbar />
      <AboutMainSection />
      <Course />
      <Footer />
    </div>
  )
}

export default About