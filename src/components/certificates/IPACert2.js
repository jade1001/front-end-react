import React from 'react'
import './Certificate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function IPACert2() {
  return (
    <div className='App h-100'>
      <button
        type='button'
        class='btn btn-primary'
        data-toggle='modal'
        data-target='#myModal'
      >
        Open modal
      </button>
      <div class='modal fade' id='myModal'>
        <div class='modal-dialog modal-lg'>
          <div class='modal-content'>
            <div class='modal-header title-header p-1'>
              <div class='container-fluid'>
                <div class='text-center'>
                  <p class='modal-title'>MonetaGo CP 100D 17/10/2019</p>
                </div>
              </div>
            </div>

            <div class='modal-body justify-content-center content'>
              <h6 style={{ color: '#7B7B7B', textAlign: 'center' }}>
                IPA Certificate
              </h6>
              <br />
              <div class='flex-container'>
                <div id='left'>
                  <p style={{ color: '#7B7B7B' }}>
                    An IPA Certificate has been automatically generated for
                  </p>
                  <br />
                  <h6>MonetaGo</h6>
                </div>
                <div id='right'>
                  <p>Download</p>
                  <button
                    type='button'
                    id='dl-btn'
                    className='btn btn-primary btn-cert'
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
              </div>
              <div className='div-box'></div>
              <p style={{ textAlign: 'left', marginLeft: '2%' }}>
                Upload a custom version of the Documents &nbsp;
                <FontAwesomeIcon icon={faChevronRight} />
              </p>
              <br />
              <div className='row'>
                <div className='col-sm-6'>
                  <button
                    type='button'
                    className='btn btn-primary btn-cert'
                    id='cancel-btn'
                  >
                    Reject
                  </button>
                </div>
                <div className='col-sm-6'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-cert'
                    id='submit-btn'
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IPACert2
