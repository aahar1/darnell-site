import React from 'react';
import { useState, useEffect } from 'react';
import '../style.css';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [navBarScroll, setNavBarScroll] = useState(false);

    //navbar scroll change background function
    const changeBackground  = () => {
        console.log(window.scrollY)
        if (window.scrollY >=50) {
            setNavBarScroll(true)
        } else {
            setNavBarScroll(false)
        }
    };

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    })

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () =>{
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)
        
        return () => {
            window.addEventListener('resize', changeWidth)
        }

    }, []);

    return (
        <div className="main-head">
         
            <nav className = {navBarScroll ? 'navBarScroll-active' : 'navBarScroll'}>             
                <h1 id='Logo'>
                    <NavLink to='/'
                     style={{textDecoration: 'none',
                             color: 'black'
                        }}>Darnell Eaton </NavLink>                        
                </h1>  
                {(toggleMenu || screenWidth > 500 ) && (
                    <ul className='nav-links' id='navhover'>
                        <li className='nav-items'><NavLink to="/">Home</NavLink>
                        </li><NavLine />
                        <li className='nav-items'><NavLink activeStyle={{ color: '#906272' }} to="/work">My Work</NavLink><NavLine /></li>
                        <li className='nav-items'><NavLink activeStyle={{ color: '#906272' }} to="/reels">Reels</NavLink><NavLine /></li>
                        <li className='nav-items'><NavLink activeStyle={{ color: '#906272' }} to="/gallery">Gallery</NavLink><NavLine /></li>
                        <li className='nav-items'><NavLink activeStyle={{ color: '#906272' }} to="/contact">Contact Me</NavLink><NavLine /></li>
                        <li className='nav-items'><NavLink activeStyle={{ color: '#906272' }} to="/resume">Resume</NavLink><NavLine /></li>
                    </ul>
                )}         
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={toggleNav}
                    className='burger'
                />
            </nav>
        </div>
        
    )
}


const NavLine = styled(motion.div)`
    height: 0.3rem;
    background: red;
    width: 5%;
    position: absolute;
    bottom: -80%;
    left: 60%;
`;









export default Nav;



