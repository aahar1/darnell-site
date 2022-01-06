import React from 'react';
import '../style.css';
import photo1 from '../images/black-white1.jpg';
import photo2 from '../images/black-white2.jpg';
import photo3 from '../images/black-white3.jpg';
import photo4 from '../images/coat.jpg';



const GallerySection = (props) => {
    return (
        <div className='gallery'>
            <header className='gallery-head'>
            <h2>Quality Photography</h2>
            <p>My professional photos</p>
            </header>
            <img className='gallery1' src={photo1} alt="standing with smile" />
            <img  style={{width: '100%', height: '100%',
                    objectFit:'cover'}}
                className='gallery2' src={photo2}alt="sitting" />
            <img className='gallery3' src={photo3} alt="standing no smile" />
            <img className='gallery4' src={photo4} alt="coat" />
        </div>
    )
}


export default GallerySection;
