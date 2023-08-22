import React from 'react'
import './testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: `I thrive on challenge and constantly set goals for myself, so I have something to strive towards. 
    I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness. 
    In my previous role, I was promoted three times in less than two years.”`
  },
  {
    avatar: AVTR2,
    name: 'Shatta wale',
    review: `I thrive on challenge and constantly set goals for myself, so I have something to strive towards. 
    I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness. 
    In my previous role, I was promoted three times in less than two years.”`
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: `I thrive on challenge and constantly set goals for myself, so I have something to strive towards. 
    I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness. 
    In my previous role, I was promoted three times in less than two years.”`
  },
  {
    avatar: AVTR4,
    name: 'John Smith',
    review: `I thrive on challenge and constantly set goals for myself, so I have something to strive towards. 
    I am not comfortable with settling, and I am always looking for an opportunity to do better and achieve greatness. 
    In my previous role, I was promoted three times in less than two years.”`
  },
];
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper pagination={{clickable: true,}} modules={[Pagination]} className='container testimonials__container'>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
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

export default Testimonials