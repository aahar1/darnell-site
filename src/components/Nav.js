import React from 'react';
import '../style.css';
//add REELS SECTION, with videos separate link
//add about me page

import {Link, NavLink} from 'react-router-dom';
const Nav = () => {
    return (
        <div className="main-head">
            
            <nav>
                <h1 id='Logo'>
                    <NavLink to='/'
                     style={{textDecoration: 'none',
                             color: 'black'
                        }}>Darnell Eaton </NavLink> </h1>
                    
                <input type="checkbox" className='menu-check' />
                <ul className='nav-links' id='navhover'>
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><NavLink activeStyle={{ color: '#906272' }}  to="/work">My Work</NavLink></li>
                    <li><NavLink activeStyle={{ color: '#906272' }} to="/reels">Reels</NavLink></li>
                    <li><NavLink activeStyle={{ color: '#906272' }} to="/contact">Contact Me</NavLink></li>
                </ul>
                <div className="burger">
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </nav>
        </div>
        
    )
}


export default Nav;



