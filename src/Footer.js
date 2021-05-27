import React from 'react'

function Footer() {
    return (
        
            <div class="my-5"><footer>
                <div class="container-fluid align-items-center" style={{backgroundColor:'black'}}>
            <div class="row py-5 text-center">
                <div class="col-12">
    
    
                    <h2 class="text-light text-center">Interested in booking an appointment?</h2>
                    <button class="btn btn-outline-light btn-lg mt-3">Let us know!</button>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-12 col-md-4 py-3">
                    <h5 class="text-info pb-3">More Links</h5>
                    <a href="#" class="text-light d-block">Blogs</a>
                    <a href="#" class="text-light d-block">Home</a>
                    <a href="#" class="text-light d-block">Contact us</a>
                    <a href="#" class="text-light">
                        Write a recommendation <i class="fas fa-heart text-light"></i>
                    </a>
                </div>
                <div class="col-12 col-md-4 text-light text-justify py-3 text-center">
                    <p style={{fontSize:15}}>
                                             FUSION AUTOGLYM                       <br/>
                        ------------------Make over to your car!------------------
    
                    </p>
                </div>
                <div class="col-12 col-md-4 py-3">
                    <h5 class="text-info pb-3">Our Social Media</h5>
                            <a href="https://www.instagram.com/fusion_autoglym/?igshid=bgagwvfb48su " target="_blank">
                                <i class="fab fa-instagram white-color" ></i>
                    </a><br/><br/>
                            <a href="https://www.facebook.com/Fusion-Autoglym-110606137102744/ " target="_blank">
                                <i class="fab fa-facebook white-color"></i>
                            </a>

                    
                </div>
            </div>
    
            <div class=" text-mutes">
                <p class="text-center" style={{color:'white'}}>Copyrights @Fusion Autoglym 2021</p>
            </div>
    
        </div>
                </footer></div>
        
    )
}

export default Footer;
