import React from 'react'
import './logo.scss'
import textLogo from "../../../img/text_logo.svg"
import walletLogo from "../../../img/wallet_logo.svg"
import forYouLogo from "../../../img/4u.svg"

const Logo = () => {
  return (
    <div className="logo">
        <img src={walletLogo} alt="Logo" className="logo__imgWallet"></img>
        <img src={textLogo} alt="Logo" className="logo__imgText"></img>
        <img src={forYouLogo} alt="Logo" className="logo__img4u"></img>
    </div>
  )
}

export default Logo