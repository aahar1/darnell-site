// src/reusable/image-gallery.component.js
import React from "react";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//framer motion carousel//
//carousel source video https://www.youtube.com/watch?v=W0bEL93tt4k
import { motion } from 'framer-motion';
import './Carouselstyles.css'
import imagesArray from "../imagesArray";
import { useRef, useEffect, useState } from 'react';

function ImageGallaryComponent (){

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
           
        return (
            
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>              
                <h1>Image Gallery</h1>
                <motion.div 
                    drag='x' 
                    dragConstraints={{right: 0, left: -width}} 
                    className="inner-carousel">
                      
                    {imagesArray.map(image => {
                        return(
                            <motion.div className="item" key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
               
            </motion.div>
        )
    
    };


export default ImageGallaryComponent;