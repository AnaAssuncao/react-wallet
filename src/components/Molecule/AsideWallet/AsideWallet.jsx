import React from 'react'
import PropTypes from 'prop-types'

import {ItemWallet} from "../../Atom/ItemWallet"
import {MainButton} from "../../Atom/MainButton"

import './asideWallet.scss'


const AsideWallet = ({dataSistemWallet,dataWalletByBrokers,dataPersonalizedWallet,selectWallet,handleSelectWallet})=>{
    return (
        <div className="asideWallet">
            <div className="asideWallet__items">
                <ItemWallet 
                    infWallets={dataSistemWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></ItemWallet>
                <ItemWallet 
                    infWallets={dataWalletByBrokers} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></ItemWallet>
                <ItemWallet 
                    infWallets={dataPersonalizedWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></ItemWallet>    
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