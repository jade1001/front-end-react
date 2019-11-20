import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const style = {
  icon: {
    marginRight: '15px'
  },
  active: {
    fontSize: '13px',
    color: '#616161',
    marginLeft: '9px',
    borderBottom: '1px solid #F3F3F3',
    lineHeight: '30px'
  }
}

class OpsNotif1 extends Component {
  render() {
    return (
      <div className='container'>
        <p style={{ color: '#505050', fontSize: '15px' }}>Notifications</p>
        <div className='row' style={style.active}>
          <div className='col-sm-4' style={{ textAlign: 'left' }}>
            <span style={style.icon}>
              <FontAwesomeIcon
                icon={faCircle}
                size='.xs'
                style={{ color: 'orange' }}
              />
            </span>
            <b style={{ color: '#505050' }}>MonetaGo 92D 03/10/2019</b>
          </div>
          <div className='col-sm-6'>
            <b style={{ color: '#505050' }}>IPA certificate has been issued</b>
          </div>
          <div className='col-sm-2'>
            <b style={{ color: '#505050' }}>07/07/2019 12:23:03</b>
          </div>
        </div>

        <div className='row' style={style.active}>
          <div className='col-sm-4' style={{ textAlign: 'left' }}>
            <span style={style.icon}>
              <FontAwesomeIcon
                icon={faCircle}
                size='.xs'
                style={{ color: 'orange' }}
              />
            </span>
            <b style={{ color: '#505050' }}>MonetaGo 120D 1/11/2019</b>
          </div>
          <div className='col-sm-6'>
            <b style={{ color: '#505050' }}>New Issuance Approved</b>
          </div>
          <div className='col-sm-2'>
            <b style={{ color: '#505050' }}>07/07/2019 12:15:49</b>
          </div>
        </div>

        <div className='row' style={style.active}>
          <div className='col-sm-4' style={{ textAlign: 'left' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MonetaGo 120D 1/11/2019
          </div>
          <div className='col-sm-6'>New Issuance Approved</div>
          <div className='col-sm-2'>07/07/2019 12:15:49</div>
        </div>

        <div className='row' style={style.active}>
          <div className='col-sm-4' style={{ textAlign: 'left' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MonetaGo 120D
            1/11/2019
          </div>
          <div className='col-sm-6'>New Issuance Approved</div>
          <div className='col-sm-2'>07/07/2019 12:15:49</div>
        </div>

        {/* <div className="row" style={style.notifs}>
          <div className="col-sm-4" style={{ textAlign: 'left' }}>
            MonetaGo CP 92D 3/10/2019
          </div>
          <div className="col-sm-6">IPA Certificate has been issued</div>
          <div className="col-sm-2">07/07/2019 12:23:03</div>
        </div>

        <div className="row" style={style.notifs}>
          <div className="col-sm-4" style={{ textAlign: 'left' }}>
            MonetaGo CP 120D 1/11/2019
          </div>
          <div className="col-sm-6">New Issuance Approved</div>
          <div className="col-sm-2">07/07/2019 12:15:49</div>
        </div> */}
      </div>
    )
  }
}

export default OpsNotif1
