import React from 'react';
import '../style.css';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="main-head">
            
            <nav>
                <h1 id='Logo'>
                    <NavLink to='/'
                     style={{textDecoration: 'none',
                             color: 'black'
                        }}>Darnell Eaton </NavLink>                        
                </h1>                         
                <ul className='nav-links' id='navhover'>
                    <li><NavLink to="/">Home</NavLink>
                    </li><NavLine />
                    <li><NavLink activeStyle={{ color: '#906272' }} to="/work">My Work</NavLink><NavLine /></li>
                    <li><NavLink activeStyle={{ color: '#906272' }} to="/reels">Reels</NavLink><NavLine /></li>
                    <li><NavLink activeStyle={{ color: '#906272' }} to="/contact">Contact Me</NavLink><NavLine /></li>
                </ul>
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



