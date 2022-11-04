import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portforlio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Experience  from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App