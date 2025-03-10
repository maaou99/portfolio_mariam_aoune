import React from 'react'
import './contact.css'


const Contact = () => {
  return (
  <div id='contact'>
<h2>Contact Us</h2>
<form>
<input id = 'name' type='text' placeholder='Name'></input>
<input placeholder = 'Email' type="email" name="" id="email" />
<br></br>
 <textarea placeholder = 'Message' id='message' rows='4' />
 <br></br>
 <button> Submit</button>
</form>

  </div>
  )
}

export default Contact