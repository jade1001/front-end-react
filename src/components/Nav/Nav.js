import React, { Component } from 'react';
import './Nav.css';
import logo from '../nav/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <nav class='navbar navbar-expand-sm bg-default navbar-default fixed-top'>
          <span class='navbar-brand' href='#'>
            <img src={logo} alt='logo' />
          </span>
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
        <div className='App'></div>
      </div>
    );
  }
}

export default Nav;
