import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { useRef } from 'react';


function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7vsjxjc', 'template_mgrg5r6', form.current, 'dhsP1WK8hFCEoMgOw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  };

  return (
    <section id='contact'>
    

 <div className="container contact_container">
 <div className="contact-options">

  <article className='contact-option'>
     <AiOutlineMail className='icon-contact'/>
    <h4>Email</h4>
    <h5>maaou99@gmail.com</h5>
    <a href="mailto:maaou99@gmail.com">Send an email.</a>

  </article>

  <article className='contact-option'>
     <AiOutlineLinkedin className='icon-contact'/>
    <h4>Linkden</h4>
    <h5>Mariam Aoune</h5>
    <a href='https://www.linkedin.com/in/mariam-aoune/' target='_blank' rel="noreferrer">Contact me.</a>

  </article>

  <article className='contact-option'>
     <AiOutlineInstagram className='icon-contact'/>
    <h4>Instagram</h4>
    <h5>mariamntech</h5>
    <a href='https://www.instagram.com/mariamntech/?next=%2F' target='_blank' rel="noreferrer">Let's chat!</a>

  </article>

 </div>

<form ref={form}>
   <input autocomplete="off" id='name' type='text' name='name' placeholder='Your full name' required />
   <input autocomplete="off" id='email' type="email" name='email' placeholder='Your email' required />
    <textarea id='message' name="message"   rows="7" placeholder='Your message' required></textarea>
    <a href='#contact'><button onClick={sendEmail} className=' btn-contact btn'>Submit</button> </a>
</form>

 </div>
    </section>
  )
}

export default Contact