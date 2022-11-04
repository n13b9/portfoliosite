import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination,Scrollbar, A11y  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonial.css'


const data = [
  {
    avatar:AVTR1,
    name:'name1',
    review:'chakas1'
  },
  {
    avatar:AVTR2,
    name:'name2',
    review:'chakas2'
  },
  {
    avatar:AVTR3,
    name:'name3',
    review:'chakas3'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'> 
      <h5>Review from clinets</h5>
      <h2>Testimonaisl</h2>
      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
          {
            data.map(({avatar,name,review},index)=>{
              return(
                <SwiperSlide key={index} className='testimonial'>
                    <div className="client__avatar">
                        <img src={avatar} />
                    </div>
                    <h5 className='client__name'> {name}</h5>
                    <small className='client__review'> 
                    {review}
                    </small>
            </SwiperSlide>
              )
            })
          }
      </Swiper>
    </section>
  )
}

export default Testimonial