import React from 'react'
import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {MainButton} from "../../Atom/MainButton"

import './walletAsideMenu.scss'

const WalletAsideMenu = ({dataSistemWallet,dataWalletByBrokers,dataPersonalizedWallet,selectWallet,handleSelectWallet})=>{
    return (
        <div className="walletAsideMenu">
            <div className="walletAsideMenu__items">
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
            </div>
            <div className="walletAsideMenu__button">
                <MainButton text="Nova Carteira" ></MainButton>
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