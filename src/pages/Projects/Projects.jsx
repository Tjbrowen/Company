import React from 'react'
import{Swiper,SwiperSlide, useSwiper}from 'swiper/react'
import 'swiper/css'
import'./Projects.css'
import data from'../../utils/slider2.json'
import { sliderSettings } from '../../utils/common'



const Projects = () => {
  return (
    <section className='r-wrapper'>
  <div className="paddings innerWidth r-container">
    <div className="r-head flexColStart">
      <span className='orangeText'>Our</span>
      <span className='primaryText'>Projects</span>
    </div>
    <Swiper {...sliderSettings}>
     <SliderButtons/>
      { data.map((card,i)=>(
          <SwiperSlide key={i}>
            <div className='flexColStart r-card'>
             <img src={card.image} alt="Home" />
             <span className='primaryText'>{card.name}</span>
             <span className='secondaryText'>{card.detail}</span>
            </div>
          </SwiperSlide>
        )
        )
      }
    </Swiper>
  </div>
    </section>
  )
}

export default Projects

const SliderButtons =()=>{
  const swiper =useSwiper();
  return(
    <div className='flexCenter r-buttons'>
    <button onClick={()=>swiper.slidePrev()}>
      &lt;
    </button>
      <button  onClick={()=>swiper.slideNext()}>
        &gt;
      </button>
    </div>
  )
}