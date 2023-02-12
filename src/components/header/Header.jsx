import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header-container'>
        <h1>Hi, I'm a Design and Computation Art Student</h1>
        <h4>UX design & Front End Web Development</h4>
        <CTA></CTA>
         <HeaderSocials></HeaderSocials>
        
      </div>
      <div className="arrow-header">
       <a href='#about'> <i className="icon-arrow"></i></a>
      </div>
    </header>
  )
}

export default Header