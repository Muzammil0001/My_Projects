import React from 'react'
import "./contact.css"
import {FiMail} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import{ useRef } from 'react';
import emailjs from 'emailjs-com';




const Contact = () => {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_2oeaa3g', 'template_qndtyrm', form.current, '8w44eggXzXxpH3sCd')
  
  .then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
e.target.reset()
    
};


  return (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

<div className='container c_container'>
<div className='c_options'>

          <article  className='c_option'>
          <FiMail className='c_option-icon'/>
          <h4>Email</h4>
          <h5>mrmuzammil0001@gmail.com</h5>
          <a href='mailto:mrmuzammil0001@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='c_option'>
          <BsWhatsapp className='c_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+923039475952</h5>
          <a href='https://wa.me/+923039475952' target='_blank'>
           Send a message</a>
          </article>

         

</div>
        <div className='c_options' >
        <form  ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Your Full Name' required/>
<input type='email' name="email" placeholder='Your Email' required/>
<textarea name='message' rows="7" placeholder='Your Message' required/>
<button type='submit' className='btn btn-primary'>Send Message</button>

</form>
        </div>
</div>

    </section>
  );
}

export default Contact;