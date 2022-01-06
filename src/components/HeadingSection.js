import React from 'react';
//styled compoments
//import styled from 'styled-components';
import '../style.css';
import { motion } from "framer-motion";

//images
//import single2 from '../images/single2.JPEG';
import photo3 from '../images/black-white3.jpg';
import plant1 from '../images/plant1.png';
//import plant2 from '../images/plant2.png';
import jacket from '../images/jacket-no-backdrop.png'



const HeadingSection = () => {
    const titleAnimation = {
        hidden: { opacity: 0 },
        show: {opacity: 1, transition: {duration: 4} },
    };
    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: 0.75, ease: 'easeOut'} },
    };
    return (
       
       <div id='hero'>
           <motion.div
            variants={container} initial="hidden" animate="show"
           className="hero-introduction flex">
                <motion.h2
                    variants={titleAnimation} 
                    initial="hidden"
                    animate="show"
                >Darnell Eaton</motion.h2>
                <h3>Entertainer</h3>
                      
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quidem, ad?
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quidem, ad?
                </p>
                <a href="#gallery" id='gallery-heading-section'>Gallery</a>
           </motion.div>
           <div className="hero-images">
               <img classname='hero-darnell' 
                    src={photo3} 
                    alt="pic of Darnell" />
                {/* <img src={jacket} alt="" className='plant1' id='plant'/>  
                <img src='' alt="" className='plant2 ' id='plant'/>   */}
           </div>
       </div>
       
    );
};

export default HeadingSection;

//styled compoments
// const Heading = styled.div`
// min-height: 90vh;
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding: 5rem 10rem;
// color: white;
// `;

// const Description = styled.div`
// flex: 1;
// padding-right: 5rem;
// h2{
//     font-weight: lighter;
// }
// `;

// export default HeadingSection;
