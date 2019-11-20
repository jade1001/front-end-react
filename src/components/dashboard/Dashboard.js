import React, { Component } from 'react'
import './CardDesign.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import report from '../dashboard/reports.png'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='container' id='divReports'>
          <div align='right' id='textReport'>
            <img src={report} width='80px' />
          </div>
        </div>
        <div className='container' id='cont'>
          <div className='row'>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
          </div>

          <div className='row' id='secondRow'>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
            <div className='col-*-*' id='fdiv'>
              asd
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
