import React from 'react'
import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {MainButton} from "../../Atom/MainButton"
import sum from "../../../img/sum_icon.svg"

import './walletAsideMenu.scss'

const WalletAsideMenu = ({dataSistemWallet,dataWalletByBrokers,dataPersonalizedWallet,balanceWallet,selectWallet,handleSelectWallet})=>{
 
    return (
        <div className="wallet-aside-menu">
            <div className="wallet-aside-menu__container">
                <div className="wallet-aside-menu__title">Minhas Carteiras</div>
                <SelectWallet 
                    infWallets={dataSistemWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>
                <SelectWallet 
                    infWallets={dataWalletByBrokers} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>
                <SelectWallet 
                    infWallets={dataPersonalizedWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>    
                <MainButton>
                    <img src={sum} alt="" className="mainButton__icon"></img>
                    <p className="mainButton__text">Nova Carteira</p>
                </MainButton>
            </div>
            <div className="wallet-aside-menu__container">
                <div className="wallet-aside-menu__title">Balancear Carteiras</div>
                <SelectWallet 
                    infWallets={balanceWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>    
            </div>
        </div>
    )
}

WalletAsideMenu.propTypes={
    dataSistemWallet:PropTypes.object,
    dataWalletByBrokers:PropTypes.object,
    dataPersonalizedWallet:PropTypes.object,
    selectWallet:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default WalletAsideMenu