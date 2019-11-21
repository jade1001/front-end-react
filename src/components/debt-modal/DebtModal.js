import React, { Component } from 'react'
import './Maturity.css'
import MaturityData from './MaturityData'
import MaturityComments from './MaturityComments'

function DebtModal () {
        return (
            <div className="App h-100">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Open modal
            </button>
                <div class="modal fade" id="myModal">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header title-header p-1">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-9 text-center">
                                            <p class="modal-title">MonetaGo CP 100D 17/10/2019</p>
                                        </div>
                                        <div class="col-3 float-right">
                                            <a href="#"  id="quickspan">
                                                <span class="title-linkt">
                                                 Quick Actions<i class="icon fa fa-fw fa-chevron-right"></i>
                                                </span>
                                                
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-body p-1">
                            <ul class="nav justify-content-center">
                                <li class="nav-item border-bottom">
                                    <a class="nav-link" href="#">Maturity Details</a>
                                </li>
                                <li class="nav-item border-bottom">
                                    <a class="nav-link " href="#">Tranches</a>
                                </li>
                                <li class="nav-item border-bottom">
                                    <a class="nav-link" href="#">Allocation</a>
                                </li>
                                <li class="nav-item border-bottom">
                                    <a class="nav-link" href="#">Credit Limits</a>
                                </li>
                                <li class="nav-item border-bottom">
                                    <a class="nav-link" href="#">Documents</a>
                                </li>
                                <li class="nav-item border-bottom">
                                    <a class="nav-link" href="#">Service Provider</a>
                                </li>
                                <li class="nav-item border-bottom">
                                    <a class="nav-link" href="#">Audit Trail</a>
                                </li>
                            </ul>
                            </div>
                            <div class="modal-data-body p-1">
                                <MaturityData/>
                            </div>
                            <div class="modal-footer border-top p-1">
                                <MaturityComments/>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default DebtModal;
