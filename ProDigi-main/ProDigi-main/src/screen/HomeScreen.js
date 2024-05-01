import React from 'react'
import NavBar from '../component/homeComponent/NavBar'
import HeroSection from '../component/homeComponent/HeroSection'
import About from '../component/homeComponent/About'
import Services from '../component/homeComponent/Services'
import Testimonials from '../component/homeComponent/Testimonials'
import Contact from '../component/homeComponent/Contact'
import Footer from '../component/homeComponent/Footer'

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomeScreen
