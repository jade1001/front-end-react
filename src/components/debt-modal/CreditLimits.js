import React, { Component } from 'react'
import './Maturity.css'

class CreditLimits extends Component {
    render() {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Rating Agency</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Limit Amount</th>
                        <th scope="col">Issue Date</th>
                        <th scope="col">Valid Before</th>
                        <th scope="col">Expiry Date</th>
                        <th scope="col" className="text-center">Verified</th>
                        <th scope="col" className="text-center">Rating Letter</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ICRA</td>
                        <td>A1+</td>
                        <td>INR</td>
                        <td>2,000,000,000</td>
                        <td>04/07/2019</td>
                        <td>04/08/2019</td>
                        <td>04/08/2019</td>
                        <td id="verify">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                        </td>
                        <td id="pdf-logo">
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text text-muted">Action</span>
                                    <a class="dropdown-item" href="#">Mark as Verified</a>
                                    <a class="dropdown-item" href="#">Reject</a>
                                    <a class="dropdown-item" href="#">Add Comments</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>CARE</td>
                        <td>A1+</td>
                        <td>INR</td>
                        <td>3,000,000,000</td>
                        <td>08/07/2019</td>
                        <td>08/08/2019</td>
                        <td>08/10/2019</td>
                        <td id="verify">
                            <i className="fa fa-circle" aria-hidden="true"></i>
                        </td>
                        <td id="pdf-logo">
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </td>
                        <td>
                            <div class="btn-group dropleft">
                                <i class="fa fa-ellipsis-v dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                                <div class="dropdown-menu">
                                    <span class="dropdown-item-text text-muted">Action</span>
                                    <a class="dropdown-item" href="#">Mark as Verified</a>
                                    <a class="dropdown-item" href="#">Reject</a>
                                    <a class="dropdown-item" href="#">Add Comments</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CreditLimits
