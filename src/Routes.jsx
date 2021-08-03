import React from 'react'

import {Header} from "./components/Organism/Header"
import {Wallets} from "./pages/Wallets"

import "./reset.scss"
import "./index.scss"

function Routes() {
  return (
    <div className="container">
        <Header></Header>
        <Wallets></Wallets>
    </div>

  )
}

export default Routes
