import React, { Component } from 'react'
import './CardDesign.css'
import report from '../dashboard/reports.png'
import OpsNotif1 from './OpsNotif1'
import Nav from '../nav/Nav'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='container' id='divReports'>
          <div align='right' id='textReport'>
            <img src={report} width='80px' />
          </div>
        </div>
        <div className='container' id='cont'>
          <div className='row'>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Total Client CP Outstanding</p>
              <p id='pBody'>15,42,000 Cr</p>
              <p id='pFooter'>INR</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Avg Yield of Outstanding</p>
              <p id='pBody'>9.78%</p>
              <p id='pFooter'>APY</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Maturing Today</p>
              <p id='pBody'>3</p>
              <p id='pFooter'>Count</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Placements In Progress</p>
              <p id='pBody'>37,200 Cr</p>
              <p id='pFooter'>INR</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Client MTD Issued</p>
              <p id='pBody'>3,01,000 Cr</p>
              <p id='pFooter'>INR</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Total Market CP Outstanding</p>
              <p id='pBody'>35,54,800 Cr</p>
              <p id='pFooter'>INR</p>
            </div>
          </div>

          <div className='row' id='secondRow'>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Client ISINs Outstanding</p>
              <p id='pBody'>135</p>
              <p id='pFooter'>Count</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Avg Term Of Outstanding</p>
              <p id='pBody'>94</p>
              <p id='pFooter'>Days</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Value Date Today</p>
              <p id='pBody'>5</p>
              <p id='pFooter'>Count</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Placements In Progress</p>
              <p id='pBody'>12</p>
              <p id='pFooter'>Count</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead'>Avg Client Issued Value</p>
              <p id='pBody'>11,422 Cr</p>
              <p id='pFooter'>INR</p>
            </div>
            <div className='col-*-*' id='fdiv'>
              <p id='pHead1'>Total Market ISINs Outstanding</p>
              <p id='pBody'>398</p>
              <p id='pFooter'>INR</p>
            </div>
          </div>
        </div>
        <OpsNotif1 />
      </div>
    )
  }
}

export default Dashboard
