import React, { Component } from 'react'
import Dashboard from '../dashboard/Dashboard'
import Login from '../login/Login'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
        }
        this.signIn = this.signIn.bind(this)
    }

    signIn(email, password) {
        this.setState({
            email: email,
            password: password,
            isLoggedIn: true,
        })
    }

    render() {
        return (
            <>
                {this.state.isLoggedIn ? (
                    <Dashboard />
                ) : (
                    <Login signIn={this.signIn} />
                )}
            </>
        )
    }
}

export default Home
