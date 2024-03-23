import React from 'react'
import './homepage.css'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"; 
import MusicSvg from '../../images/music.svg';

 
const Homepage = () => {
   
    return (
      <div id='homepage'>
       <div id='main'> </div>
       <section id='center'>
      <h1 className='focus-in-expand'>EFFIDYST</h1>
       <button><Link to={"/page"}>EXPLORE</Link></button> 
      </section>
      <section id='right'>
        <button><img src={MusicSvg}/></button>
      </section>
      </div>
      
    );
     
  }
  
  export default Homepage