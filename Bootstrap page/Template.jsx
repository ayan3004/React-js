import React from 'react'
import Navbar from './Compononts/Navbar'
import Header from './Header'
import Section1 from './Compononts/Section1'
import Section2 from './Compononts/Section2'
import Section3 from './Compononts/Section3'
import Footer from './Compononts/Footer'
function Template() {
  return (
    <div>
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
  )
}

export default Template