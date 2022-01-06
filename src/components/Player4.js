import React from 'react';
import ReactPlayer from 'react-player';
import '../style.css';

const Player = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={[

                    'https://www.youtube.com/watch?v=iM_iFQHt-_A'

                ]}
            />

        </div>
    )
}


export default Player;
