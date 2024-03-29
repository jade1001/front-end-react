import React, { Component } from 'react'
import './debt.css'
import JSONData from '../DebtIssuanceTab/data.json'
import MaturityData from '../debt-modal/MaturityData'
import MaturityComments from '../debt-modal/MaturityComments'

class DebtIssuance extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      jsonData: JSONData
    }
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    })
  }

  render() {
    let filtered = this.state.jsonData.filter(data => {
      return (
        data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      )
    })
    return (
      <div className='container-fluid'>
        <div className='commercial ml-4 pt-5'>
          <span>Commercial Paper</span>
        </div>
        <div className='row'>
          <div className='col-2 sidenav'>
            <div className='sided ml-3'>
              <a href='blank' className='maturities'>
                <span>Maturities ISIN</span>
                <i className='icon fa fa-fw fa-chevron-right'></i>
              </a>
              <a href='blank' className='tranch'>
                <span>Tranches</span>
                <i className='icon fa fa-fw fa-chevron-right'></i>
              </a>
              <a href='blank' className='allo'>
                <span>Allocations</span>
                <i className='icon fa fa-fw fa-chevron-right'></i>
              </a>
              <ul>
                <li>
                  <a href='blank' className='start'>
                    Start New
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-10 '>
            <div className='pt-4 navIndent'>
              <nav className='navbar navbar-light'>
                <a className='navbar-brand' href='blank'>
                  <i className='fa fa-download'></i>
                </a>

                <form className='form-inline my-2 my-lg-0'>
                  <input
                    className='form-control mr-sm-2'
                    type='search'
                    aria-label='Search'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                  />
                  <button
                    className='btn btn-dark my-2 my-sm-0'
                    type='submit'
                    onChange={this.updateSearch.bind(this)}
                  >
                    <i className='fa fa-fw fa-search'></i>
                  </button>
                </form>
              </nav>
              <table className='table table-hover table-content'>
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>ISIN</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Total Redemption Value</th>
                    <th scope='col'>Tenor</th>
                    <th scope='col'>Maturity Date</th>
                    <th scope='col'>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((n, i) => (
                    <tr
                      key={i}
                      data-toggle='modal'
                      data-target='#myModal'
                      id='tRow'
                    >
                      <div class='modal fade' id='myModal'>
                        <div class='modal-dialog modal-lg'>
                          <div class='modal-content'>
                            <div class='modal-header title-header p-1'>
                              <div class='container-fluid'>
                                <div class='row'>
                                  <div class='col-9 text-center'>
                                    <p class='modal-title'>
                                      MonetaGo CP 100D 17/10/2019
                                    </p>
                                  </div>
                                  <div class='col-3 float-right'>
                                    <a href='#' id='quickspan'>
                                      <span class='title-linkt'>
                                        Quick Actions
                                        <i class='icon fa fa-fw fa-chevron-right'></i>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='modal-body p-1'>
                              <ul class='nav justify-content-center'>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link' href='#'>
                                    Maturity Details
                                  </a>
                                </li>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link ' href='#'>
                                    Tranches
                                  </a>
                                </li>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link' href='#'>
                                    Allocation
                                  </a>
                                </li>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link' href='#'>
                                    Credit Limits
                                  </a>
                                </li>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link' href='#'>
                                    Documents
                                  </a>
                                </li>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link' href='#'>
                                    Service Provider
                                  </a>
                                </li>
                                <li class='nav-item border-bottom'>
                                  <a class='nav-link' href='#'>
                                    Audit Trail
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class='modal-data-body p-1'>
                              <MaturityData />
                            </div>
                            <div class='modal-footer border-top p-1'>
                              <MaturityComments />
                            </div>
                          </div>
                        </div>
                      </div>

                      <td>
                        <span>{n.name}</span>
                      </td>
                      <td>
                        <span>{n.isin}</span>
                      </td>
                      <td>
                        <span>{n.status}</span>
                      </td>
                      <td>
                        <span>{n.trvalue}</span>
                      </td>
                      <td>
                        <span>{n.tenor}</span>
                      </td>
                      <td>
                        <span>{n.mdate}</span>
                      </td>
                      <td>
                        <span>{n.created}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DebtIssuance
