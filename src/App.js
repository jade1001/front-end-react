import React from 'react'
import './App.css'
<<<<<<< HEAD
import Home from './components/index/Home.js'

function App() {
    return (
        <div className="App h-100">
            <Home />
        </div>
    )
=======
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
      <Home />
      {/* <DebtIssuance /> */}
      {/* <Tables /> */}
      {/* <OpsNotif /> */}
    </div>
  )
>>>>>>> 22b24f87511cf8b3f42f4f37399490b49d71d110
}

export default App
