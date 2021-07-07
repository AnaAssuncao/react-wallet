import React from 'react'

import {Header} from "./components/Organism/Header"
import {Wallet} from "./pages/Wallet"

import "./reset.scss"
import "./index.scss"

function Routes() {
  return (
    <div className="container">
        <Header></Header>
        <Wallet></Wallet>
    </div>

  )
}

export default Routes
