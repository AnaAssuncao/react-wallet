import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {AsideButton} from "../../Atom/AsideButton"
import sum from "../../../img/sum_icon.svg"

import './asideMenuWallet.scss'

const AsideMenuWallet = ({dataSistemWallet,dataWalletByBrokers,dataPersonalizedWallet,balanceWallet,selectWallet,handleSelectWallet})=>{
 
    return (
        <div className="aside-menu-wallet">
            <div className="aside-menu-wallet__container">
                <div className="aside-menu-wallet__title">Minhas Carteiras</div>
                <SelectWallet 
                    infoWallets={dataSistemWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>
                <SelectWallet 
                    infoWallets={dataWalletByBrokers} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>
                <SelectWallet 
                    infoWallets={dataPersonalizedWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>    
                <AsideButton>
                    <img src={sum} alt="" className="aside-button__icon"></img>
                    <p className="aside-button__text">Nova Carteira</p>
                </AsideButton>
            </div>
            <div className="aside-menu-wallet__container">
                <div className="aside-menu-wallet__title">Balancear Carteiras</div>
                <SelectWallet 
                    infoWallets={balanceWallet} 
                    select={selectWallet} 
                    handleSelectWallet={handleSelectWallet}></SelectWallet>    
            </div>
        </div>
    )
}

AsideMenuWallet.propTypes={
    dataSistemWallet:PropTypes.object,
    dataWalletByBrokers:PropTypes.object,
    dataPersonalizedWallet:PropTypes.object,
    selectWallet:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default AsideMenuWallet