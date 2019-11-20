import React from 'react';
import './App.css';
import OpsNotif1 from './components/Dashboard/OpsNotif1';
// import LoginNav from './components/login/LoginNav';
// import Nav from './components/Nav/Nav';
// import Login from './components/login/Login';
// import Nav from './components/Nav/Nav'
// import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <div className="App h-100">
      {/* <Nav /> */}
      {/* <Dashboard /> */}
      {/* <Login /> */}
      {/* <OpsNotif /> */}
      <OpsNotif1 />
    </div>
  );
import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Nav from './components/nav/Nav'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/index/Home.js'
import OpsNotif from './components/Dashboard/OpsNotif'

function App() {
    return (
        <div className="App h-100">
            {/* <Dashboard /> */}
            {/* <Nav /> */}
            {/* <Login /> */}
            <Home />
            {/* <OpsNotif /> */}
        </div>
    )
}

export default App
