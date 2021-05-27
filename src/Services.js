import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import carbg from './carbg.jpg';
import shoplogo from './shoplogo.jpg';


const slideImages = [
    carbg ,carbg , carbg 
];

function Services() {
    return (
        <div className="slide-container" style={{height:"500px"}}>
            <Slide>
                <div className="each-slide" style={{ textAlign: 'center'}}>
                    <div style={{  height: "500px" ,}}>
                        <img src={shoplogo}/>
                        <span style={{color:"red"}}>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide" style={{ textAlign: 'center' }}>
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: "500px" }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide" style={{ textAlign: 'center' }}>
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: "500px"}}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
export default Services;