import { Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';



// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';
//custom css
import '../swiper.css'

//PICS
import photo4 from '../images/black-white3-headshot.jpg';
import headShot from '../images/head-shot.jpg';
import blackWhite1 from '../images/black-white4.jpg';
import improv from '../images/improv-photo.JPG';




const HomePageSlider = () => {
  return (
    
    <motion.div 
      
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      className="container">
      <div className="swiper">
        <Swiper
          // install Swiper modules
          modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          autoplay={true}
          loop={true}
          speed={800}
          slidesPerView={1}
          navigation
          effect={'fade'}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          // className='swiper-styles'
        >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="image__wrapper">
              <SwiperSlide className='slider-styles'><img src={photo4} /></SwiperSlide>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="image__wrapper">
              <SwiperSlide className='slider-styles'><img src={headShot} /></SwiperSlide>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="image__wrapper">
              <SwiperSlide className='slider-styles'><img src={blackWhite1} /></SwiperSlide>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="image__wrapper">
              <SwiperSlide className='slider-styles'><img src={improv} /></SwiperSlide>
            </div>
          </div>
        </div>
        </Swiper>
      </div>
          
         
         
    </motion.div>

     
  )
}

export default HomePageSlider