import React from 'react'
import './header.css'
import CV from '../../assets/CV.pdf'

//import { useState } from "react";

const CTA = () => {


  return (
    <div className="cta">
        <a href={CV} download><button className='btn'>Download CV</button></a>
        <a href='#contact'><button className=' btn btn-chat'>Let's Chat!</button> </a>
    </div>
  )
}

export default CTA