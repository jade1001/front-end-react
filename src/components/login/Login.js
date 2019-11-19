import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'

const style = {
    inputs: {
        padding: '5px 15px',
        fontFamily: 'Century Gothic',
        border: '1px solid #ddd',
        margin: 0,
    },
    icons: {
        border: '1px solid #ddd',
        borderRadius: 0,
        backgroundColor: '#eee',
    },
}

class Login extends Component {
    render() {
        return (
            <div className="row h-100 justify-content-center align-items-center">
                <form className="mx-auto text-center">
                    <h5>Treasury Debt Issuance</h5>
                    <p>Login To Your Account</p>
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
                                type="text"
                                placeholder="Password"
                                style={style.inputs}
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
