import React from 'react'
import ReactPlayer from './Player';
import ReactPlayer2 from './Player2';
import ReactPlayer3 from './Player3';
import ReactPlayer4 from './Player4';
import ReactPlayer5 from './Player5';
import '../style.css';
//images
import improv from '../images/improv-photo.JPG';


const Reels = () => {
    return (
        <div>
            <div className="reels-h1">
                <h1>Darnell's Reels</h1>
            </div>
                <div className="players">
                <ReactPlayer />
                <ReactPlayer2 />
                <ReactPlayer3 />
                <ReactPlayer4 />
                <ReactPlayer5 />
                </div>
            
        </div>
    )
}



export default Reels;
