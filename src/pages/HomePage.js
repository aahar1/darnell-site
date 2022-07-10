import React from 'react';
//pages
import HeadingSection from '../components/HeadingSection';
import ResumeSectioin from '../components/ResumeSectioin';
import StorySection from '../components/StorySection';
import ImageGallaryComponent from '../components/ImageGallaryComponent';
import GallerySection from '../components/GallerySection';
import Contact from '../components/Contact';
import '../style.css';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../components/animation';

const HomePage = () => {
    return (
        <motion.div
            exit='exit' 
            variants={pageAnimation} 
            initial='hidden' 
            animate='show'
            style={{overFlow: 'hidden'}}>
           <HeadingSection />
           <StorySection />
           <ImageGallaryComponent />
           <ResumeSectioin />
         n
        
        </motion.div>
    )
}



export default HomePage;
