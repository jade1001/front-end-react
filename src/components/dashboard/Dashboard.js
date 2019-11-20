import React, { Component } from 'react'
import './CardDesign.css'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='container' id='divReports'>
          <div align='right' id='textReport'>
            Reports<i class='fas fa-chevron-right'></i>
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
