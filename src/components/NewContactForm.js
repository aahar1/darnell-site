import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';
import '../style.css';
import sitting from '../images/sitting.jpg';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

export const NewContactForm = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);
    reset();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xh0hnu2', 'template_96mrkoc', form.current, 'NJC8PBBVtNF1RZrL5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <motion.div
            style={{marginTop: '2.5rem'}}
            exit='exit'
            variants={pageAnimation} 
            initial='hidden' 
            animate='show'
            className="container">
            <div className='contact'>
                <div className="form-wrapper flex">
                    <h2>Get in <br />
                        <span>TOUCH</span></h2>
                    <form 
                       
                        ref={form} onSubmit={sendEmail}
                        className='form-wrapper'>
                        <input type='text'
                            placeholder='Full Name'
                            name='user_name' required
                        />
                       
                        <input type="email"
                            placeholder='Email'
                            name='user_email'
                            required />
                        <input type="text"
                            placeholder='Subject'
                            name='Subject'
                            required />
                        <textarea name="message" cols="30" rows="5"></textarea>
                        <button type='submit'>Submit</button>
                       
                    </form>
                </div>
                <img src={sitting} alt="sitting" />
            </div>

        </motion.div>
    );
};