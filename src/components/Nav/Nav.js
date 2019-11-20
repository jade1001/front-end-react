import React, { Component } from 'react';
import './Nav.css';
import logo from '../nav/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import DebtIssuance from '../DebtIssuanceTab/DebtIssuance';

class Nav extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Router>
          <nav class='navbar navbar-expand-sm bg-default navbar-default fixed-top'>
            <a class='navbar-brand' href='#'>
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
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to='/dashboard' className='nav-link'>
                    Dashboard
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/debt-issuance' className='nav-link'>
                    Debt Issuance
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/credit-limits' className='nav-link'>
                    Credit Limits
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/identities' className='nav-link'>
                    Identities
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/settings' className='nav-link'>
                    Settings
                  </Link>
                </li>
              </ul>
              <div className='nav-right'>
                <Link to='/ops' className='nav-link nav-item helpnav'>
                  IPA Ops
                  <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                <Link to='/help' className='nav-link nav-item helpnav'>
                  Help
                </Link>
              </div>
            </div>
          </nav>
          <div className='App'>
            <Switch>
              <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/debt-issuance' exact component={DebtIssuance} />
              <Route path='/credit-limits' exact component={CreditLimits} />
              <Route path='/identities' exact component={Identities} />
              <Route path='/settings' exact component={Settings} />
              <Route path='/ops' exact component={OPS} />
              <Route path='/help' exact component={Help} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
const CreditLimits = () => (
  <div>
    <h1>Credit Limits</h1>
  </div>
);
const Identities = () => (
  <div>
    <h1>Identities</h1>
  </div>
);
const Settings = () => (
  <div>
    <h1>Settings</h1>
  </div>
);
const OPS = () => (
  <div>
    <h1>OPS</h1>
  </div>
);
const Help = () => (
  <div>
    <h1>Help</h1>
  </div>
);

export default Nav;
