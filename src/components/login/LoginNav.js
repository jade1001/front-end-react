import React, { Component } from 'react'
import logo from '../nav/logo.png'
import '../login/loginNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class LoginNav extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-sm bg-default navbar-default fixed-top'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarToggler'
            aria-controls='navbarToggler'
          >
            <span class='navbar-toggler-icon'>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarToggler'>
            <ul className='navbar-nav ml-auto' style={{ marginRight: '3%' }}>
              <li className='nav-item'>
                <a href='#home' className='nav-link'>
                  Sign In
                </a>
              </li>
              <li className='nav-item'>
                <a href='#home' className='nav-link'>
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/debt-issuance" exact component={BankPH} />
              <Route path="/credit-limits" exact component={CreditLimits} />
              <Route path="/identities" exact component={Identities} />
              <Route path="/settings" exact component={Settings} />
            </Switch>
          </div>
        </Router> */}
      </div>
    )
  }
}

export default LoginNav
