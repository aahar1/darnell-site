import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import '../style.css';
import ReelsData from './ReelsData';
//images
import improv from '../images/improv-photo.JPG';
//bootstrap carousel
//import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useRef } from 'react'
import YoutubeEmbed from "./YoutubeEmbed";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {Autoplay, Pagination} from 'swiper'
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';
//custom css
import '../swiper.css'
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

const Reels = () => {
    const swiperRef = useRef(null)

    
    return (
        <motion.div
            exit='exit'
            variants={pageAnimation}
            initial='hidden'
            animate='show' 
            className="video-container">
            
            <Swiper
                modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoplay={{
                   
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, }}
                loop={true}
                speed={800}
                slidesPerView={1}
                navigation
                effect={'fade'}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiper-styles'
            >
                <SwiperSlide>  <YoutubeEmbed embedId="Rd6SAIIQBfc" /> </SwiperSlide> 
                <SwiperSlide>  <YoutubeEmbed embedId="7aDVe1Cpae0" /> </SwiperSlide>           
                <SwiperSlide>  <YoutubeEmbed embedId="kmObRimRJ5U" /> </SwiperSlide>           
                <SwiperSlide>  <YoutubeEmbed embedId="iM_iFQHt-_A" /> </SwiperSlide>           
                <SwiperSlide>  <YoutubeEmbed embedId="fEg44HwsCOM" /> </SwiperSlide>           
            </Swiper>
        </motion.div>
       
    )
    
}



export default Reels;
