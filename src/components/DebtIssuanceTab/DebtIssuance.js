import React from 'react'
import './debt.css'


function DebtIssuance(){



    return (
        <div className="container">
            <div className="commercial">
            <span >Commercial Paper</span>
            </div>
                <div className="row">
                    <div className="col-m-4 m-3 sidenav">
                        <div className="sided w-100 ml-3 mr-2">
                            <a href="#" className="maturities">
                                <span>Maturities ISIN</span>
                                <i className="icon fa fa-fw fa-chevron-right"></i>
                             </a>
                            <a href="#" className="tranch">
                                <span>Tranches</span>
                                <i className="icon fa fa-fw fa-chevron-right"></i>
                            </a>
                            <a href="#" className="allo">
                                <span>Allocations</span>
                                <i className="icon fa fa-fw fa-chevron-right"></i>
                            </a>
                            <ul>
                            <li>
                                <a href="#" className="start">
                                    Start New 
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-m-8 m-3 ">
                        <div className="pt-4 navIndent">
                       
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="#"><i className='fa fa-download'></i></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fa fa-fw fa-search"></i></button>
                                        
                                    </form>
                                    
                                </div>
                            </nav>
                           
                            </div>
                        </div>  
                </div>
        </div> 
    )
    
    }
export default DebtIssuance



























{/* <div className = "Debt">
            <p className="normal">Commercial Paper</p>
        </div>

        <div>
            <p className = "maturities">Maturities ISIN></p>
            <p>Tranches</p>
            <p>Allocations</p>
            <p>Start New</p>
        </div>    */}