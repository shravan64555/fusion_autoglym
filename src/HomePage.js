import React from 'react';
import Samplecard from './Samplecard';
import Title from './Title';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Services';
import Options from './Options';


function HomePage() {
    return (
        < BrowserRouter >
            <Title></Title>,
            <Options></Options>,
            <Services></Services>
            <Samplecard></Samplecard>
            
            </BrowserRouter>
        
    );
}
export default HomePage;