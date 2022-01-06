import React from 'react';
import shoe from '../images/tie-shoe.jpg';
import '../style.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';

const Work = () => {
    // const ColoredLine = ({ color }) => (
    //     <hr
    //         style={{
    //             color,
    //             backgroundColor: color,
    //             height: 5,
    //             width: 500,
    //             alignContent: "center",
    //             color: 'blue',
    //             margin: '10 rem 10 rem'
    //         }}
    //     />
    // );
    return (
    <motion.div 
    exit='exit' 
    variants={pageAnimation} initial='hidden' animate='show'> 
        <div className='container'>
          <div className='row'>
                <div className="column">
                    <div className="description">
                            <h1>About Me</h1>
                            <p>Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quis, cum.</p>
                            <button>Resume pdf</button>
                    </div>
                </div>          
            <div className='column'>               
                <p>Height: 5’8 Weight: 165 Hair: Black Eyes: Black</p>             
            </div>
            <div className='column'>
                <img src={shoe} alt=""
                style={{width: '100%',
                        justifyContent: 'end'
                }}
                />
            </div>
          </div>
        </div>
            <Line className="line">
            </Line>
        <div className="container2">
            <div className="row">
                <div className="column">
                    <div className="column1-description">
                            <h2>Stage</h2>
                    </div>
                </div>
                    <div className="column">
                        <div className="column2-description">
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                        </div>

                    </div>  
            </div>          
                       
        </div> 
            <Line className="line">
            </Line>
        <div className="container2">
            <div className="row">
                <div className="column">
                    <div className="column1-description">
                            <h2>Improvisation/Sketch Comedy</h2>
                    </div>
                </div>
                    <div className="column">
                        <div className="column2-description">
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                        </div>

                    </div>  
            </div>          
                       
        </div> 
            <Line className="line">
            </Line>
        <div className="container2">
            <div className="row">
                <div className="column">
                    <div className="column1-description">
                            <h2>Film/Commercials Web Series</h2>
                    </div>
                </div>
                    <div className="column">
                        <div className="column2-description">
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                        </div>

                    </div>  
            </div>          
                       
        </div> 
            <Line className="line">
            </Line>
        <div className="container2">
            <div className="row">
                <div className="column">
                    <div className="column1-description">
                            <h2>Training/Special Skills</h2>
                    </div>
                </div>
                    <div className="column">
                        <div className="column2-description">
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                            <p className='acting-gigs'>Improv |IMusical |2021<br /> 
                            <span>lead actor</span></p>
                        </div>

                    </div>  
            </div>          
                       
        </div> 
            <Line className="line">
                </Line>
               
            
            
    </motion.div>
    )
}


const Line = styled.div`
    height: 0.5rem;
    background:#800020 ;
    margin-bottom: 4rem;
    width: 90%;
    margin: auto;
    align-items: center;
`;


export default Work;
