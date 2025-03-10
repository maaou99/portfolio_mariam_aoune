import React from 'react'
import './imageSlider.css'
import { useState, useEffect } from 'react';
import { motion, useScroll } from "framer-motion"
import imageOne from '../../images/company.jpeg'
import imageTwo from '../../images/company5.jpeg'
import imageThree from '../../images/people1.jpeg'
import imageFour from '../../images/modern-company-that-encourages-productivity-(1).jpeg'
import imageFive from '../../images/company6.jpeg'

const ImageSlider = () => {
    const [offset, setOffset] = useState(0);
    const spacing = '100px'
    useEffect(() => {
      const onScroll = () => {
        setOffset(window.scrollY/1.2)
         
      };
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
    return (
      <div id='images'  > {/* This creates space to allow scrolling */}
        <motion.div
        className='image-container'
        style={{
          
          display: 'flex',
          justifyContent: 'space-between',
        transform: 'translateY(50%)',
         width:'500px',
         marginRight: offset,
         marginLeft: '-320px'
       
        }}
      >
      
         
        <motion.img
          src={imageTwo}
          className='image'
          style={{ marginLeft: offset }}
          alt='Image 5'
        />

<motion.img
          src={imageThree}
          className='image'
          style={{ marginLeft: spacing }}
          alt='Image 5'
        />

<motion.img
          src={imageFour}
          className='image'
          style={{ marginLeft: spacing }}
          alt='Image 5'
        />

<motion.img
          src={imageFive}
          className='image'
          style={{ marginLeft: spacing }}
          alt='Image 5'
        />
      </motion.div>
      </div>
    );
  };

export default ImageSlider