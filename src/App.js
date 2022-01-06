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
import Work from './pages/Work';
//Animation
import {AnimatePresence} from 'framer-motion';

function App() {
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
          <Reels />
        </Route>
      </Switch>  
      </AnimatePresence>  
      <Footer />
    </div>
  );
}

export default App;
