import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'> 
      <h5> Skills i Have </h5>
      <h2> My Experience </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4> HTML </h4>
                      <small className='text-light'> Experienced </small>
                    </div>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>CSS </h4>
                    <small className='text-light'> Intermediate </small>
                  </div>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4> Javascript </h4>
                      <small className='text-light'> Experienced </small>
                    </div>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                    <div>
                      <h4> Bootstrap </h4>
                      <small className='text-light'> intermediate </small>
                    </div>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <h4> React </h4>
                  <small className='text-light'> Experienced </small>
              </article>
            </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4> NodeJS </h4>
                    <small className='text-light'> Experienced </small>
                  </div>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <h4>Php </h4>
                  <small className='text-light'> Intermediate </small>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <h4> MySql </h4>
                  <small className='text-light'> Experienced </small>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <h4> Python </h4>
                  <small className='text-light'> intermediate </small>
              </article>
              <article classsName='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <h4> MongoDB </h4>
                  <small className='text-light'> Experienced </small>
              </article>
            </div>

        </div>
      </div>

    </section>
  )
}

export default Experience