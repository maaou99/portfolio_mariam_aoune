import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { RiServiceLine } from 'react-icons/ri';
import { RiImageLine } from 'react-icons/ri';
import { AiOutlineComment } from 'react-icons/ai';
import { AiOutlineContacts } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');

  const smoothScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };

  return (
    <nav>
      <Link title="Home" to='#header' onClick={() => { setActiveNav('#header'); smoothScrollTo('#header'); }} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></Link>
      <Link title="Images" to='#images' onClick={() => { setActiveNav('#images'); smoothScrollTo('#images'); }} className={activeNav === '#images' ? 'active' : ''}><RiImageLine/></Link>
      <Link title="Services" to='#services' onClick={() => { setActiveNav('#services'); smoothScrollTo('#services'); }} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></Link>
      <Link  title="Testimonials" to='#cards' onClick={() => { setActiveNav('#cards'); smoothScrollTo('#cards'); }} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineComment/></Link>
      <Link  title="Contact" to='#contact' onClick={() => { setActiveNav('#contact'); smoothScrollTo('#contact'); }} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></Link>
    </nav>
  );
}

export default Nav;