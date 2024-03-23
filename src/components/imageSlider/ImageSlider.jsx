import React from 'react'
import './imageSlider.css'

import { motion, useScroll } from "framer-motion"

export const MyComponent = ({ isVisible }) => (
    <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
)


const ImageSlider = () => {
 
}

export default ImageSlider