import React from 'react'
import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {MainButton} from "../../Atom/MainButton"

import './asideWallet.scss'


const AsideWallet = ({dataSistemWallet,dataWalletByBrokers,dataPersonalizedWallet,selectWallet,handleSelectWallet})=>{
    console.log(selectWallet)
    return (
        <div className="asideWallet">
            <div className="asideWallet__items">
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
            <div className="asideWallet__button">
                <MainButton text="Nova Carteira" ></MainButton>
            </div>
        </div>
    )
}

AsideWallet.propTypes={
    dataSistemWallet:PropTypes.object,
    dataWalletByBrokers:PropTypes.object,
    dataPersonalizedWallet:PropTypes.object,
    selectWallet:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default AsideWallet