import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
 
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Services from './components/services/Services'
 
const App = () => {
  
  return (
    // Made with React.js
    <div id='app'>
   
       <Nav />
       
       <Header />
       <About/> 
       <Services/>
       <Portfolio/>
      
       <Contact/>
       <Footer/>
 


    </div>
  
    

  
    
  )
  
}

export default App