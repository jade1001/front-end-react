import React, { Component } from 'react'
import './debt.css'
import JSONData from '../DebtIssuanceTab/data.json'

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
      <div className='container'>
        <div className='commercial'>
          <span>Commercial Paper</span>
        </div>
        <div className='row'>
          <div className='col-m-4 m-3 sidenav'>
            <div className='sided w-100 ml-3 mr-2'>
              <a href='#' className='maturities'>
                <span>Maturities ISIN</span>
                <i className='icon fa fa-fw fa-chevron-right'></i>
              </a>
              <a href='#' className='tranch'>
                <span>Tranches</span>
                <i className='icon fa fa-fw fa-chevron-right'></i>
              </a>
              <a href='#' className='allo'>
                <span>Allocations</span>
                <i className='icon fa fa-fw fa-chevron-right'></i>
              </a>
              <ul>
                <li>
                  <a href='#' className='start'>
                    Start New
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-m-8 m-3 '>
            <div className='pt-4 navIndent'>
              <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand' href='#'>
                  <i className='fa fa-download'></i>
                </a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>

                <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <form className='form-inline my-2 my-lg-0'>
                    <input
                      className='form-control mr-sm-2'
                      type='search'
                      placeholder='Search'
                      aria-label='Search'
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                    />
                    <button
                      className='btn btn-outline-success my-2 my-sm-0'
                      type='submit'
                      onChange={this.updateSearch.bind(this)}
                    >
                      <i class='fa fa-fw fa-search'></i>
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div>
          <table className='table table-hover'>
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
                <tr key={i}>
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
    )
  }
}

export default DebtIssuance
