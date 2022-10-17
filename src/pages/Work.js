import React from 'react';
import shoe from '../images/tie-shoe.jpg';
import '../style.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';
import PDFFile from '../components/PDFFile';
import { Link } from 'react-router-dom'

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
    //INCREASE FONT SIZE ON 'STAGE', IMPROV', ETC
    return (
    

    <motion.div 
    exit='exit' 
    variants={pageAnimation}
     initial='hidden' animate='show'
    >         
        <div className='container'>
          <div className='row'>
                <div className="column">
                    <div className="description">
                            <h1>About Me</h1>
                            {/* <p>Entertainer</p> */}
                            {/* <Link to='/resume'>
                             <button>Resume PDF</button>
                            </Link> */}
                            
                    </div>
                </div>          
            <div className='column'>               
                <p>Height: 5’8 Weight: 165 Hair: Black Eyes: Black</p>             
            </div>
            <div className='column'>
                <img 
                    className='work-page-image'
                    src={shoe} 
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
                            <h2>Improvisation/Sketch Comedy</h2>
                    </div>
                </div>
                    <div className="column">
                        <div className="column2-description">
                            <p className='acting-gigs'>Citizen's Watch |Improv |2021<br /> 
                            <span>Improvisor</span></p>
                            <p className='acting-gigs'>Love Onion Improv Ensemble |Improv |2021<br /> 
                                <span>Improvisor </span></p>
                            <p className='acting-gigs'>iMusical Improv Ensemble |IMusical |2021<br /> 
                                <span>Improvisor </span></p>
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
                            <h2>Stage</h2>
                    </div>
                </div>
                    <div className="column">
                        <div className="column2-description">
                            <p className='acting-gigs'>Use All Available Doors |Ensemble |2021<br /> 
                            <span>Actor</span></p>
                            <p className='acting-gigs'>Yet I Stand |Reggie |2021<br /> 
                            <span>Actor</span></p>
                            <p className='acting-gigs'>Not My Baby |Manny |2021<br /> 
                            <span> Actor</span></p>
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
                            <p className='acting-gigs'>Walden University Commecial |Student/Model |2021<br /> 
                            <span> Actor</span></p>
                            <p className='acting-gigs'>The Web Developers: Series |Dave |2021<br /> 
                            <span> Actor</span></p>
                            <p className='acting-gigs'>App.Love: Series |Marcus |2021<br /> 
                            <span>Actor</span></p>
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
                        <div 
                            style={{marginBottom: '8rem'}}
                            className="column2-description">
                            <p className='acting-gigs'>The Theatre Lab |Comedy |2021<br /> 
                                <span>Improvisor</span></p>
                            <p className='acting-gigs'>Synetic Theatre |Synetic Technique Movement |2021<br /> 
                                <span>Improvisor</span></p>
                            <p className='acting-gigs'>Second City Chicago |Improv Boot-camp |2021<br /> 
                            <span>Improvisor</span></p>
                        </div>

                    </div>  
            </div>          
                       
        </div> 
          
            
            
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
    margin-top: 3rem;
`;


export default Work;
