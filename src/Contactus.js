import React from 'react';
import shoplogo from './shoplogo.jpg';
import tinku from './tinku.png';
import tillu from './tillu1.png';
 function Contactus() {
    return (
        <div>
            <div className="container-fluid my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid rounded-circle w-50 "
                            src={tinku}
                            alt="Fusion Autoglym">
                        </img><br/><br/>
                        <h2 className="black-color">Hemanth</h2><br/>
                        <h3 style={{ color: 'black' }}>ContactInfo: <a href="tel:">123-456-7890</a></h3><br/>
                        <a href="https://instagram.com/tinku_hemanth?igshid=1ffcamwh90vgc " target="_blank">
                            <i class="fab fa-instagram black-color" style={{ color: "deeppink" }}></i>
                        </a>    
                        

                    </div>
                    <div className="col-12 col-md-6">
                        <img className="img-fluid rounded-circle w-50 "
                            src={tillu}
                            alt="Fusion Autoglym">
                        </img><br /><br />
                        <h2 className="black-color">Revanth</h2><br/>
                        <h3 style={{ color: 'black' }}>ContactInfo: <a href="tel:">123-456-7890</a></h3><br/>
                        <a href="https://instagram.com/tillurevanth?igshid=16eaqkjjyng4t " target="_blank">
                            <i class="fab fa-instagram black-color" style={{ color: "deeppink" }}></i>
                        </a>

                </div>
                </div>

            </div>
        </div>
    )
}

export default Contactus;