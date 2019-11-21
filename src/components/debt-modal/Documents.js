import React, { Component } from 'react'
import './Maturity.css'

class Documents extends Component {
    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Document Type</th>
                        <th scope="col">Last Filename</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="text-center">Verified</th>
                        <th scope="col">Signatures</th>
                        <th scope="col">Last Edited</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Board Resolution</td>
                        <td>board_resolution_201906.pdf</td>
                        <td>Signed</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>2 Issuer</td>
                        <td>01/06/2019 15:02:56</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>RBI Report</td>
                        <td>rbi_cp_100d_20191017.pdf</td>
                        <td>Signed</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>2 Issuer</td>
                        <td>08/07/2019 10:58:22</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>IPA Declaration</td>
                        <td>ipadec_cp_100d_20191017.pdf</td>
                        <td>Signed</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>2 Issuer</td>
                        <td>08/07/2019 10:58:22</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Letter Of Offer</td>
                        <td>loo_cp_100d_20191017.pdf</td>
                        <td>Signed</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>2 Issuer</td>
                        <td>08/07/2019 10:58:22</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>DCN-Mutual Fund Of India</td>
                        <td>dcn_mfi1_cp_100d_20191017.pdf</td>
                        <td>Signed</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>1 Investor, 2 Issuer</td>
                        <td>08/07/2019 11:10:39</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Stamp Duty Receipt</td>
                        <td>eSBTR.pdf</td>
                        <td>Uploaded</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>1 Investor, 2 Issuer</td>
                        <td>08/07/2019 11:10:39</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>IPA Certificate</td>
                        <td>ipacert_cp_100d_20191017.pdf</td>
                        <td>Pending Approval</td>
                        <td id="verify"><i class="fa fa-circle" aria-hidden="true"></i></td>
                        <td>None</td>
                        <td>08/07/2019 11:10:39</td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text">Action</span>
                                    <a class="dropdown-item" href="#">View Document</a>
                                    <a class="dropdown-item" href="#">Download</a>
                                    <a class="dropdown-item" href="#">Approve/Reject</a>
                                    <a class="dropdown-item" href="#">Add Comment</a>
                                    <a class="dropdown-item" href="#">View History</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Documents
