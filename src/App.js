import React from 'react';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Nav from './components/Nav';
//React router installed.  just import here.
import {Route, Switch, useLocation} from 'react-router-dom';
//styling
import GlobalStyle from './components/GlobalStyle';
//pages
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reels from './components/Reels';
import ReelsData from './components/ReelsData';
import Work from './pages/Work';
import Player from './components/Player5';
//Animation
import {AnimatePresence} from 'framer-motion';
import PDFFile from './components/PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {

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
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path = '/work'>
          <Work />
        </Route>
        <Route path = '/reels'>
            <Reels player={videos}          
          />          
        </Route>
        <Route path = '/resume'>
          <PDFDownloadLink document ={<PDFFile />} fileName='FORM'>
            {({loading}) =>(loading ? <button>Loading Document</button>: <button>Download</button>)}
          </PDFDownloadLink>
          <PDFFile />
        </Route>
      </Switch>  
      </AnimatePresence>  
      <Footer />
    </div>
  );
}

export default App;
