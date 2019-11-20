import React, { Component } from 'react'
// import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import { faIdCardAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import { faKey } from '../../../node_modules/@fortawesome/free-solid-svg-icons'
import style from './LoginStyles'

class Login extends Component {
    render() {
        return (
            <div className="mx-auto row h-100 justify-content-center align-items-center">
                <form className="mx-auto text-center">
                    <h4 className="mb-5">Treasury Debt Issuance</h4>
                    <p className="mb-5">Login To Your Account</p>
                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                style={style.icons}
                            >
                                <FontAwesomeIcon icon={faIdCardAlt} />
                            </span>

                            <input
                                type="text"
                                placeholder="User ID / Email"
                                style={style.inputs}
                            ></input>
                        </div>
                    </div>

                    <div className="input-group form-group">
                        <div className="input-group-prepend">
                            <span
                                className="input-group-text"
                                style={style.icons}
                            >
                                <FontAwesomeIcon icon={faKey} />
                            </span>

                            <input
                                type="password"
                                placeholder="Password"
                                style={style.inputs}
                            ></input>
                        </div>
                    </div>
                    <label class="float-left">Forgot password?</label>
                    <button type="submit" class="btn btn-secondary float-right">
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}

export default Login
