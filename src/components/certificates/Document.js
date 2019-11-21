import React from 'react'
import './Certificate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Document1() {
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
                eSign (1 Document)
              </h6>
              <br />
              <div class='flex-container'>
                <div id='left'>
                  <br />
                  <h6>IPA Certificate</h6>
                </div>
                <div id='right' style={{ marginLeft: '510px' }}>
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
              <p style={{ textAlign: 'left' }}>Document 1 of 1 &nbsp;</p>
              <br />
              <div style={{ float: 'right' }}>
                <p>
                  I have read and agree to sign this document
                  digitally&nbsp;&nbsp;
                  <input type='checkbox' />
                </p>
              </div>
              <br />
              <br />
              <div className='row'>
                <div className='col-sm-5'>
                  <button
                    type='button'
                    style={{ marginTop: '30px' }}
                    className='btn btn-primary btn-cert'
                    id='cancel-btn'
                  >
                    Cancel
                  </button>
                </div>
                <div className='col-sm-7'>
                  <div class='form-group'>
                    <label for='usr'>
                      Please type your full name to sign the documents
                    </label>
                    <input type='text' class='form-control' id='usr' />
                    <button
                      type='submit'
                      className='btn btn-primary btn-cert'
                      id='submit-btn'
                    >
                      Sign Docs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Document1
