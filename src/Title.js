import React from 'react';
import shoplogo from './shoplogo.jpg';
import carbg from './carbg.jpg';

 function Title() {
    return (
        <div class="container-fluid bgimg mt-5" style={{
            backgroundImage: `url(${carbg})`, backgroundRepeat: 'no-repeat',
            
            
             }} >

            <div class="row text-center align-items-center my-5 py-5" >
                <div class="col-12 col-md-6 my-5">
                    <img className="img-fluid rounded-circle w-50 "
                    src={shoplogo}
                        alt="Fusion Autoglym">
                    </img>
                </div>
                <div class="col-12 col-md-6 pt-5 my-5">
                    <div class="font-weight-light font-size2  " >
                        <h1 class="font-size2">Hi, we are <span class="text-info">Fusion Autoglym</span></h1>
                    </div>
                    <h1 class="font-weight-dark ">One stop to give the look your car deserves</h1>
                </div>
            </div>
        </div>
    )
}
export default Title;
