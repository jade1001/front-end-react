import React, { Component } from 'react'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import { faIdCardAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import { faKey } from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import style from './LoginStyles'
import LoginNav from '../login/LoginNav'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Email: '',
      Password: ''
    }
    this.emailOnChangeHandler = this.emailOnChangeHandler.bind(this)
    this.passOnChangeHandler = this.passOnChangeHandler.bind(this)
    this.Login = this.Login.bind(this)
  }

  emailOnChangeHandler(event) {
    this.setState({
      ...this.state,
      Email: event.target.value
    })
  }

  passOnChangeHandler(event) {
    this.setState({
      ...this.state,
      Password: event.target.value
    })
  }

  Login(event) {
    const email = '1'
    const pass = '1'
    if (this.state.Email === email && this.state.Password === pass) {
      this.props.signIn(this.state.Email, this.state.Password)
      event.preventDefault()
    } else {
      alert('Incorrect Email or Password')
      event.preventDefault()
    }
  }

  render() {
    return (
      <>
        <LoginNav />
        <div className='mx-auto row h-100 justify-content-center align-items-center'>
          <form className='mx-auto text-center' onSubmit={this.Login}>
            <h4 className='mb-5'>Treasury Debt Issuance</h4>
            <p className='mb-5' style={{ color: '#192f59' }}>
              Login To Your Account
            </p>
            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' style={style.icons}>
                  <FontAwesomeIcon icon={faIdCardAlt} />
                </span>

                <input
                  type='text'
                  placeholder='User ID / Email'
                  style={style.inputs}
                  onChange={this.emailOnChangeHandler}
                ></input>
              </div>
            </div>

            <div className='input-group form-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text' style={style.icons}>
                  <FontAwesomeIcon icon={faKey} />
                </span>

                <input
                  type='password'
                  placeholder='Password'
                  style={style.inputs}
                  onChange={this.passOnChangeHandler}
                ></input>
              </div>
            </div>
            <label class='float-left'>
              <a href='#'>Forgot password?</a>
            </label>
            <Link to='/dashboard'>
              <button
                type='submit'
                class='btn btn-secondary float-right'
                style={{ backgroundColor: '#192f59' }}
              >
                Sign In
              </button>
            </Link>
          </form>
        </div>
      </>
    )
  }
}

export default Login
