import React from 'react';
import ReactPlayer from 'react-player';
import '../style.css';

const Player = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={[

                    'https://www.youtube.com/watch?v=fEg44HwsCOM'

                ]}
            />

        </div>
    )
}


export default Player;
