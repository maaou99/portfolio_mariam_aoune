import React from 'react'
import './footer.css'

function Footer() {
  return (
     <footer>

      <div className="permalinks">
      <a href="#homepage" className='footer-logo'>Home</a> 
        <a href="#about" className='footer-logo'>About</a> 
    
 
       
        <a  href="#homepage">Mariam</a>
        <a href="portfolio" className='footer-logo'>Work</a> 
        <a href="#services" className='footer-logo'>Services</a> 
      </div>
     
     
      
<div className="footer_copyright">
  <small>&copy; 2023 Mariam Aoune. All rights reserved.</small>
</div>
     
     </footer>
  )
}

export default Footer