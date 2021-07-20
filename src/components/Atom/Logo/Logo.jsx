import React from 'react'
import './logo.scss'
import textLogo from "../../../img/text_logo.svg"
import walletLogo from "../../../img/wallet_logo.svg"

const Logo = () => {
  return (
    <div className="logo">
        <img src={walletLogo} alt="Logo" className="header__imgWallet"></img>
        <img src={textLogo} alt="Logo" className="header__imgText"></img>
    </div>
  )
}

export default Logo