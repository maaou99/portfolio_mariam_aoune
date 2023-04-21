import React from 'react'
import './portfolio.css'



const WorkPortfolio = (props) => {

 
  return (
 


    <section id='portfolio'>

    <div className="portfolio-work ">
        
      <div className="content work1">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.descriptionSec}
        <br></br>
        <br></br>
        {props.descriptionthird}</p>
  
        <br></br>
        <br></br>
        <br></br>

      <div className="cta-workPortfolio">
      <a href={props.assets} target="_blank" rel="noopener noreferrer"><button className=' btn '>DEMO</button> </a>
        <a href={props.href} target="_blank" rel="noopener noreferrer"><button className=' btn '>SOURCE CODE</button> </a>
  
      </div>
        
      </div>

      <div className="content quote1">
      <h1>{props.text}</h1>
       <span> ~ {props.author}</span>
      </div>

    

    </div>
    
    

  </section>
  )
}

export default WorkPortfolio