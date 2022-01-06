import React from 'react';
import ReactPlayer from 'react-player';
import '../style.css';

const Player = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url= {[
                    'https://www.youtube.com/watch?v=kmObRimRJ5U',
                    'https://www.youtube.com/watch?v=7aDVe1Cpae0',
               
                    ]}               
                />
       
        </div>
    )
}


export default Player;
