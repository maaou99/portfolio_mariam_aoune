import React from 'react'
import './nav.css'
import {TfiHome} from 'react-icons/tfi'
import {RxPerson} from 'react-icons/rx'
import {RiServiceLine} from 'react-icons/ri'
import {BsChatLeftDots} from 'react-icons/bs'
import {BsBook} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><TfiHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RxPerson/></a>
     
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBook/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatLeftDots/></a>
    </nav>
  )
}

export default Nav