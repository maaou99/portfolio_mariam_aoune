import React from 'react'
import './services.css'


const Service = (props) => {
  return (
    <div >
 <div id="services">
<div className='cell-1'>
  <h1>{props.title}</h1>
</div>
<div className='cell-2'>
  <p>{props.intro}</p>
</div>
<div className='cell-3'>

  <h4>{props.header}</h4>
</div>

<div className='cell-4'>
   <img src={props.img}></img>
 
</div>
<div className='cell-5'>
  <h3>{props.feature}</h3>
  <p>{props.text}</p>
  <br></br>
 
 
  <h4>{props.feature1}</h4>
  <p>{props.text1}</p>
 
</div>
 
 
 
    </div>
 
    <div class="bar">
   <div class="bar_slide">
     <p>BEST IN THE INDUSTRY</p>
   </div>  

   <div class="bar_slide">
     <p>BEST IN THE INDUSTRY</p>
   </div>

   <div class="bar_slide">
     <p>BEST IN THE INDUSTRY</p>
   </div>

   <div class="bar_slide">
     <p>BEST IN THE INDUSTRY</p>
   </div>
 </div>

 

    </div>
   
  )
}

export default Service