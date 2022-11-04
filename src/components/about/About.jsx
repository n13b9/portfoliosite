import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserSecret} from 'react-icons/fa'
import {ImLibrary} from 'react-icons/im'

import './about.css'

const About = () => {
  return (
    <section id='about'> 
      <h5> Get To Know </h5>
      <h2> About Me </h2>
      <div className="container about__container"> 
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
              <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>experience</h5>
                  <small> enough years </small>
              </article>
              <article className='about__card'>
                  <FaUserSecret className='about__icon'/>
                  <h5> Clients</h5>
                  <small> many </small>
              </article>
              <article className='about__card'>
                  <ImLibrary className='about__icon'/>
                  <h5> Projects</h5>
                  <small> many many </small>
              </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a eos iusto fugit magni? Porro quaerat sint non ratione amet! Eos, soluta at enim autem fuga vero. Expedita, velit aliquid.
          </p>

          <a href="#contact" className='btn btn-primary'> Lets Talk</a>
        </div>
      </div>
    </section>
  
  )
}

export default About