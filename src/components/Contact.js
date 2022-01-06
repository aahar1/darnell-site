import React from 'react'
import '../style.css';
import sitting from '../images/sitting.jpg';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';


const Contact = (props) => {
    return (
        <motion.div
         exit='exit'  
         variants={pageAnimation} initial='hidden' animate='show'
        className="container">
            <div className='contact'>
                <div className="form-wrapper flex">
                    <h2>Get in <br />
                        <span>TOUCH</span></h2>
                    <form action="">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" required />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                <img src={sitting} alt="sitting" />
                
            </div>
            
        </motion.div>
        
    )
}



export default Contact;
