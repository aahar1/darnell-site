import React from 'react';
import HomePage from './pages/HomePage';
import HomePageSlider from './components/HomePageSlider';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
//New Nav bar 2022
import NavNew from './components/NavNew';
import Nav from './components/Nav';
//React router installed.  just import here.
import {Route, Switch, useLocation} from 'react-router-dom';
//styling
import GlobalStyle from './components/GlobalStyle';
//pages
import Contact from './components/Contact';
import { NewContactForm } from './components/NewContactForm';
import Footer from './components/Footer';
import Reels from './components/Reels';
import ReelsData from './components/ReelsData';
import Work from './pages/Work';
import Gallery from './pages/Gallery';
import PDFFile from './components/PDFFile';
import Resume from './pages/Resume'
//Animation
import {AnimatePresence} from 'framer-motion';
import {useState} from 'react';





function App() {

  const [close, setClose] = useState(false);
  const closeMobileMenu = () => {
    setClose(false)
  }

  const videos = ReelsData.map((video) => {
    return (
     <div>
        key={video.id}
        video={video.source}
     </div>
        
      
    )
  })


  const location = useLocation();
  return (
    <div className="App">
      <NavNew />
      
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <HomePageSlider />
         
        </Route>
        <Route path='/contact'>
          <NewContactForm />
        </Route>
        <Route path = '/work'>
          <Work />
        </Route>
        <Route path = '/reels'>
            <Reels />          
        </Route>
        <Route path = '/gallery'>
            <Gallery />          
        </Route>
        <Route path = '/resume'>
              <Resume /> 
        </Route>
      </Switch>  
      </AnimatePresence>  
      <Footer />
    </div>
  );
}

export default App;
