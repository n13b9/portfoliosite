import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4zyrryw', 'template_s5ew8se', form.current, 'AbuEjlCE4mw3TENrk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <section id='contact'> 
        <h5>Get in Touch</h5>
        <h2> Contact Me plz</h2>
        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <HiOutlineMail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>email@gmail.com</h5>
                    <a href="mailto:email@gmail.com" target='_blank'> Send a Message</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>Whatsapp</h4>
                    <h5>7777777777</h5>
                    <a href="https://api.whatsapp.com/send?phone=+917777777777" target='_blank'> Send a Message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'> Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact