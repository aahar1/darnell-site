import React from 'react'
import '../style.css';
import sitting from '../images/sitting.jpg';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';



// emailjs.sendForm('service_xh0hnu2', 'template_96mrkoc', form.current, 'NJC8PBBVtNF1RZrL5')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     }
//     );
// event.target.reset();

const Contact = () => {
    return (
        <motion.div
            style={{height: '80vh'}}
            exit='exit'
            variants={pageAnimation} 
            initial='hidden' 
            animate='show'
            className="container">
            <div className='contact'>
                <div className="form-wrapper flex">
                    <h2>Gets in <br />
                        <span>TOUCH</span></h2>
                    <form className='--form-control--card'>
                        <input type='text'
                                placeholder='Full Name'
                                name='user_name' required
                         />
                        <label htmlFor="email">Your Email</label>
                        <input type="email"
                                placeholder='Email'
                                name='user_email'
                             required />
                        <input type="text"
                                placeholder='Subject'
                                name='Subject'
                             required />

                        <button type='submit'>Sukkbmit</button>
                        <textarea name="message"  cols="30" rows="10"></textarea>
                    </form>
                </div>
                <img src={sitting}alt="sitting" />


            </div>

        </motion.div>

    )
}
    




export default Contact;
