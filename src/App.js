// import React from 'react'
// import './App.css'
// import Home from './components/index/Home.js'

// function App() {
//     return (
//         <div className="App h-100">
//             <Home />
//         </div>
//     )
// }

// export default App

import React, { Component } from 'react'
import './App.css'
import Home from './components/index/Home.js'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'

export class App extends Component {
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
            <div className="App h-100">
                {this.state.isLoggedIn ? (
                    <Dashboard />
                ) : (
                    <Login signIn={this.signIn} />
                )}
            </div>
        )
    }
}

export default App
