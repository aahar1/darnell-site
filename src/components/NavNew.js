import '../NavNew.css'
import { MenuItems } from './MenuItems';
import { useState, useEffect } from 'react';
//import '../style.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
//icon imports
import {MenuOutlined} from '@material-ui/icons';
import {Close} from '@material-ui/icons';




    
const NavNew = () => {

    // const [toggleMenu, setToggleMenu] = useState(true);
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const [navBarScroll, setNavBarScroll] = useState(false);
    // const [clicked, setClicked] = useState(false);
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    
    const showMenu = () => {
        setActive(!active)
    }

    const closeMobileMenu = () => {
      setActive(false)
    }
  
    //navbar scroll change background function
    // const changeBackground = () => {
    //     console.log(window.scrollY)
    //     if (window.scrollY >= 50) {
    //         setNavBarScroll(true)
    //     } else {
    //         setNavBarScroll(false)
    //     }
    // };

    // useEffect(() => {
    //     changeBackground()
    //     window.addEventListener('scroll', changeBackground)
    // })

    // const toggleNav = () => {
    //     setToggleMenu(!toggleMenu)
    // }

    // useEffect(() => {
    //     const changeWidth = () => {
    //         setScreenWidth(window.innerWidth);
    //     }

    //     window.addEventListener('resize', changeWidth)

    //     return () => {
    //         window.addEventListener('resize', changeWidth)
    //     }

    // }, []);

  return (
    <div className="header">  

          <div className="menu-icon">
              <MenuOutlined className='menu' onClick={showMenu} />
          </div>
      <nav className={active ? 'slider active' : 'slider'}>

                  <ul>
                 
                    <div className='closed'>
                      <Close className='close' onClick={showMenu} />
                    </div>

                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                <StyledNavLink 
                                    onClick={() =>active && closeMobileMenu()}
                                     className={item.cName} 
                                     to={item.url}
                                >
                                  {item.title}
                                </StyledNavLink >  
                                </li>
                            )
                        })}                    
                  </ul>            
      </nav>
    
    </div>
  )
}


// const NavLine = styled(motion.div)`
//     height: 0.3rem;
//     background: light-blue;
//     width: 5%;
//     position: absolute;
//     bottom: -80%;
//     left: 60%;
// `;


//  const NavbarContainer = styled.nav`
// width: 100%;
// height: 50px;


// `;


const StyledNavLink = styled(NavLink)`
   
 
      

  font-weight: bold;

  text-decoration: none;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: #00FFFF;
  }
`;


export default NavNew;
