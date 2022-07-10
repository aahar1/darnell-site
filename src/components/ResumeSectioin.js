import React from 'react';
import styled from 'styled-components';
//bootstarp cards
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../style.css';
//images
import shoe from '../images/tie-shoe.jpg';
import pink from '../images/pink2.JPG';



const ResumeSectioin = () => {
    return (
        <div className='about'>
            <div className="about-image">
                <h5 id='size'></h5>
                <img src={pink} alt="" />
            </div>   
            <div className="about-text flex">
                <h2>Darnell Eaton</h2>
                <div className="about-life">
                    <h3>My life</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque accusantium cumque ut atque ratione amet. Ad quo sit reiciendis?
                        
                    </p>
                </div>
                <div className="about-work">
                    <h3>My Work</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque accusantium cumque ut atque ratione amet. Ad quo sit reiciendis?
                        
                    </p>
                </div>
                <div className="about-contact">
                    <h3>Get In Touch</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque accusantium cumque ut atque ratione amet. Ad quo sit reiciendis?
                        
                    </p>
                </div>
            </div>
        </div>
        

    );
};

const Paragrah = styled.p`
text-align: left;

`;

// const Card = styled.div`
// background: #84ceeb;
// width: 25%;

// `;


export default ResumeSectioin;
