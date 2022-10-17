import '../photoGallery.css';
import '../imagesArray';
import imagesArray from '../imagesArray';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation';




const Gallery = () => {



  const [model, setModel] = useState(false);
  const [temimgSrc, setTemimgSrc] = useState('');

  const getImg = (imagesArray) => {
    setTemimgSrc(imagesArray);
    setModel(true);
  }

  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      style={{ overFlow: 'hidden' }}>
 
      <div className={model ? "model open" : "model"}>
     
        <img src={temimgSrc} />
        <CloseIcon onClick={ () => setModel(false)} />
      </div>
      <div className="h1-gallery">
        <h1 
          style={{ textAlign: 'center', fontSize: '4rem' }}>Gallery</h1>
      </div>

       <div className="gallery">
        
          {imagesArray.map((image) => {
              return (
                <div className='pics' key={image} onClick={()=>getImg(image)}>
                 
                  <img src={image} style={{width: '100%'}}/>
                </div>
           
              )
          } )}
        </div>
    </motion.div>
  )
}

export default Gallery