import React from 'react';
import { Link } from "react-router-dom";

 function options() {
    return (
        <div>
            <div className="continer-fluid ">
                
                <div class="row d-flex justify-content-center" style={{display: "inline-block;"}}>
                    <div class="col-3" style={{alignContent:'center'}}>
                        <a href="https://www.google.com/maps/@17.5880719,78.0837581,18.55z " target="_blank">
                            <i class="fas fa-map-marker-alt black-color" style={{ color: "#e0b32b" }}></i>
                            <h6 className="pt-2" style={{ color: "black" ,fontSize:"15px"}}>Our location</h6>
                           
                            
                        </a>
                        
                        

                    </div>
                    <div className="col-3" style={{ alignContent: 'center' }}>
                        <a href="tel:1234567891">
                            <i class="fas fa-phone-square black-color" style={{ color: "blue" }}></i>
                            <h6 className="pt-2" style={{ color: "black", fontSize: "15px" }}>Contact Us</h6>
                        </a>

                    </div>
                    <div class="col-3" style={{ alignContent: 'center' }}>
                        <a href=" https://wa.me/919381454544" target="_blank">
                            <i class="fab fa-whatsapp-square black-color" style={{ color: "green", fontSize: "30px" }}></i>
                            <h6 className="pt-2" style={{ color: "black", fontSize: "15px" }}>WhatsApp</h6>
                        </a>

                    </div>
                    <div class="col-3" style={{ alignContent: 'center' }}>
                        <a href="https://www.instagram.com/fusion_autoglym/?igshid=bgagwvfb48su " target="_blank">
                            <i class="fab fa-instagram black-color" style={{ color: "deeppink" }}></i>
                            <h6 className="pt-2" style={{ color: "black", fontSize: "15px" }}>Instagram</h6>
                        </a>

                    </div>
                </div>    

            </div>
        </div>
    )
}
export default options;