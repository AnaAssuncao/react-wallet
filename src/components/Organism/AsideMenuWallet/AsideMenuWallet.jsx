import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {SelectWalletToBalance} from "../../Molecule/SelectWalletToBalance"
import {AsideButton} from "../../Atom/AsideButton"
import sum from "../../../img/sum_icon.svg"

import './asideMenuWallet.scss'

const AsideMenuWallet = ({summaryWallet,selectCodeWallet,handleSelectCodeWallet,handleSelectCodeBalanceWallet})=>{
    const arrayCategoriesSumary = Object.keys(summaryWallet.categories) 
    const arrayCodeWallets =  Object.keys(summaryWallet.wallets) 
    const getCategoryWallets= (nameCategory) =>{
          return arrayCodeWallets.filter((wallet)=> summaryWallet.wallets[wallet].category===nameCategory)
    }

    const listSelectWallets = arrayCategoriesSumary.map((nameCategory)=>{
        const listWallets = getCategoryWallets(nameCategory,arrayCodeWallets)
        return <SelectWallet 
                    key={nameCategory}
                    summaryWallet = {summaryWallet}
                    nameCategory = {nameCategory}
                    listWallets={listWallets} 
                    selectCode={selectCodeWallet} 
                    handleSelectCodeWallet={handleSelectCodeWallet}/>
    })

    const listBalanceWallets = Object.keys(summaryWallet.balanceWallets)

    return (
        <div className="aside-menu-wallet">
            <div className="aside-menu-wallet__container">
                <div className="aside-menu-wallet__title">Minhas Carteiras</div>
                {listSelectWallets}
                <AsideButton>
                    <img src={sum} alt="" className="aside-button__icon"></img>
                    <p className="aside-button__text">Nova Carteira</p>
                </AsideButton>
            </div>
            <div className="aside-menu-wallet__container">
                <div className="aside-menu-wallet__title">Balancear Carteiras</div>
               <SelectWalletToBalance 
                    summaryWallet = {summaryWallet}
                    listWallets={listBalanceWallets}
                    selectCode={selectCodeWallet} 
                    handleSelectCodeWallet={handleSelectCodeBalanceWallet}/>
            </div>
        </div>
    )
}

AsideMenuWallet.propTypes={
    summaryWallets:PropTypes.object,
    selectCodeWallet:PropTypes.string,
    handleSelectCodeWallet:PropTypes.func
}

export default AsideMenuWallet
