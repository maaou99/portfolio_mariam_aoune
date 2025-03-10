import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import ImageSlider from './components/imageSlider/ImageSlider'
import Homepage from './components/homepage/Homepage';
import CardSlider from './components/cardSlider/CardSlider';
import Contact from './components/contact/Contact';
 
const App = () => {
  
  return (
    // Made with React.js
    <div id='app'>
  <Nav/>
  <Header />
  <ImageSlider/>
  <Services/>
  <CardSlider/>
  <Contact/>
  <Footer/>
  

    </div>
  
    

  
    
  )
  
}

export default App