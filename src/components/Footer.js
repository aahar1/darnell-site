import React from 'react';
import '../style.css';

import twitter from '../images/twitter 1.svg';
import youtube from '../images/youtube-symbol 1.svg';


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <footer id='footer1'>
                    <h4>Darnell Eaton &copy; 2022</h4>
                    <ul>
                        <li><a href=""><img src={twitter} alt="" /></a></li>
                        <li><a href=""><img src={youtube} alt="" /></a></li>
                        <li><a href=""><img src={twitter} alt="" /></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}



export default Footer;
