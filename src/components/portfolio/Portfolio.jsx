import React from 'react'
import './portfolio.css'
import WorkPortfolio from './WorkPortfolio'
import RHF from '../../assets/RHFWeb.mp4'
import Emotions from '../../assets/EmotionsWeb.mp4'
import AloneClub from '../../assets/alone_in_the_club1.mp4'
 

const Portfolio = () => {
  return (
    <div >
       <WorkPortfolio href = 'https://github.com/maaou99/final_cart_211' assets= {Emotions} author = 'Diana Santos' text = '“Creativity is nothing but the way to solve new problems”' title = "Emotions"
        description = " Built with Javascript, HTML, and CSS, this website was a final assignment for a computational arts program, CART211. We were asked to code a non-commercial website from scratch using the programming languages explained in class. Three 3D spheres were exported from the web-based application spline. " descriptionSec = "The project allowed me to apply creativity, user interface concepts and code. The idea was to focus on the various human behaviours and map each to an imaginative universe. One emotion reigns in each world. The page describes the technicalities of each universe with a brief narrative. This creative concept intended to consider the importance of unveiling emotions as a sign of strength. This website welcomes the notion of willingly expressing ourselves through words and encourages others to suggest various other forms of emotions to present on the website. "/>
       
       <WorkPortfolio href = 'https://github.com/maaou99/CART263_Mariam_Aoune/tree/main/Project%201' assets= {AloneClub} author = 'Paul Cookson' text = '“Websites should look good from the inside and out.”' title = "Alone at the club" description = "The prompt given to me was 'feeling left out in a club.' With this topic, I was guided to code particles behaving in a specific manner. However, before coding, I needed to visualize what I would create. So I decided to make a mood board to illustrate my thought process." descriptionSec = "My p5.js file applied object-oriented programming to structure the code, improve readability, encourage usability, and develop advanced concept skills. Classes, methods and a constructor were used, as mentioned in class. I also used the polar.js library to create a geometric shape using sin()." />
  
       <WorkPortfolio href = 'https://github.com/maaou99/RHF_Internship' assets= {RHF}  author = 'Wynetka Ann Reynolds' text = ' “Anyone who says you can’t see a thought doesn’t know art.”' title = "RHF" description = "This project, coded by me (Mariam) and designed by the creative director Rad Hourani, is a website showcasing artistic pieces curated by Rad. During my internship at Rad Hourani Foundation, I worked on this website with Javascript, HTML and CSS. " descriptionSec = " Various front-end web development skills were applied to this website, such as Grid CSS, DOM Javascript and Responsive CSS design. Coding a functional website has developed my web programming skills and encouraged me to find other efficient ways to build websites, such as using the ReactJS framework. "  descriptionthird = "Please note the idea behind this project, as well as the concept of the user design flow, was purely conceived by Rad Hourani. My job was to code each component and assist with any technical difficulties. I do not identify as the founder of this website. All artistic pieces and descriptions were removed solely for copyright purposes, as my intention is only to display front-end web development skills. " />

    </div>
   


  )
}

export default Portfolio