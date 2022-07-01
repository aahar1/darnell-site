import React from 'react';
import ReactPlayer from 'react-player';
import '../style.css';

const Player = ({player}) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={player}
                />
            
        </div>
    )
}


export default Player;
