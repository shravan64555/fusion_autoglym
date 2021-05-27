import React from 'react'
import HomePage from './HomePage';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contactus from './Contactus';






function App() {
  return (
    < BrowserRouter >
    
      <Navbar></Navbar>,
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contactus} />
        
        
      </Switch>
      
      <Footer></Footer>

    </BrowserRouter >
    
    
    
   
    
  );
}

export default App;
