import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {SelectWalletToBalance} from "../../Molecule/SelectWalletToBalance"
import {AsideButton} from "../../Atom/AsideButton"
import sum from "../../../img/sum_icon.svg"

import './asideMenuWallet.scss'

const AsideMenuWallet = ({summaryWallet,selectedWalletCode,handleCodeWallet,handleCodeBalanceWallet,addNewCustomWallet})=>{
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
                    selectCode={selectedWalletCode} 
                    handleSelectCodeWallet={handleCodeWallet}/>
    })

    const listBalanceWallets = Object.keys(summaryWallet.balanceWallets)

    return (
        <aside className="aside-menu-wallet">
            <div className="aside-menu-wallet__container">
                <div className="aside-menu-wallet__title">Minhas Carteiras</div>
                {listSelectWallets}
                <AsideButton onClick={addNewCustomWallet}>
                    <img src={sum} alt="" className="aside-button__icon"></img>
                    <span className="aside-button__text">Nova Carteira</span>
                </AsideButton>
            </div>
            <div className="aside-menu-wallet__container">
                <strong className="aside-menu-wallet__title">Balancear Carteiras</strong>
               <SelectWalletToBalance 
                    summaryWallet = {summaryWallet}
                    listWallets={listBalanceWallets}
                    selectCode={selectedWalletCode} 
                    handleSelectCodeWallet={handleCodeBalanceWallet}/>
            </div>
        </aside>
    )
}

AsideMenuWallet.propTypes={
    summaryWallets:PropTypes.object,
    selectedWalletCode:PropTypes.string,
    handleCodeWallet:PropTypes.func,
    handleCodeCustomWallet:PropTypes.func,
    handleCodeBalanceWallet:PropTypes.func,
    addNewCustomWallet:PropTypes.func
}

export default AsideMenuWallet
