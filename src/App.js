import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Nav from './components/nav/Nav'
import Dashboard from './components/dashboard/Dashboard'
import Home from './components/index/Home.js'
import OpsNotif from './components/dashboard/OpsNotif'
import DebtIssuance from './components/DebtIssuanceTab/DebtIssuance'

function App() {
  return (
    <div className='App h-100'>
      {/* <Dashboard /> */}
      {/* <Nav /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      <DebtIssuance />
      {/* <Tables /> */}
      {/* <OpsNotif /> */}
    </div>
  )
}

export default App
