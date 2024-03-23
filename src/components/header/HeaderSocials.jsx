import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header-social'>
        <a href='https://www.linkedin.com/in/mariam-aoune/' target='_blank' rel="noreferrer" ><AiOutlineLinkedin></AiOutlineLinkedin></a>
        <a href='https://github.com/maaou99' target='_blank' rel="noreferrer"><AiFillGithub/> </a>
       
    </div>
  )
}

export default HeaderSocials