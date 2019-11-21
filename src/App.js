import React from 'react'
import './App.css'
import Home from './components/index/Home.js'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'

function App() {
    return (
        <div className="App h-100">
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Nav} />
            </Router>
        </div>
    )
}

export default App
