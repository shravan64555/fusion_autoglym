import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
       
          
            <nav className="navbar navbar-expand-md fixed-top bg-white">
                <div className="container-fluid my-2">
                    <a href="/" className="nav-left anchor-brand text-dark font-weight-bold font-size1" >
                        FUSION AUTOGLYM
            </a>
                    <Link to="/contact" className="ml-auto mx-3">
                        <button className="btn btn-outline-info  ">
                        <span className="font-size ">Know our Contact </span>
            </button>

                    </Link>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav">
                        <span className="fas fa-bars text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                        <div className="navbar-nav">
                            <a href="/Allprojects" className="nav-item nav-link text-dark font-weight-boldx-3 my-auto font-size mx-3 ">
                                Plans
                    </a>
                            <a href="/Allblogs" className="nav-item nav-link text-dark font-weight-boldx-3 my-auto font-size mx-3">
                                Blogs
                    </a>
                        </div>
                    </div>
                </div>
            </nav>
          
        
    )
}
export default Navbar;