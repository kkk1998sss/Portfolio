import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portifolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import OUTLET_CAL from './components/testProgram/OUTLET_CAL'


const App = () =>{
    return(
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            {/* <OUTLET_CAL/> */}
            <Footer />
        </>
    )
}

export default App
