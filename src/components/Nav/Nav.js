import React, { Component } from 'react';
import '../Nav/Nav.css';
import logo from '../Nav/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav class="navbar navbar-expand-sm bg-default navbar-default fixed-top">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
          >
            <span class="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="#home" className="nav-link">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Debt Issuance
                </a>
              </li>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Credit Limits
                </a>
              </li>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Identities
                </a>
              </li>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Settings
                </a>
              </li>
            </ul>
            <div className="nav-right">
              <a href="#home" className="nav-link nav-item helpnav">
                IPA Ops
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
              <a href="#home" className="nav-link nav-item helpnav">
                Help
              </a>
            </div>
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
    );
  }
}

export default Nav;
