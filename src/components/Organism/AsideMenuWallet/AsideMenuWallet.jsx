import PropTypes from 'prop-types'

import {SelectWallet} from "../../Molecule/SelectWallet"
import {SelectWalletToBalance} from "../../Molecule/SelectWalletToBalance"
import {AsideButton} from "../../Atom/AsideButton"
import sum from "../../../img/sum_icon.svg"

import './asideMenuWallet.scss'

const AsideMenuWallet = ({summaryWallet,selectCodeWallet,handleCodeWallet,handleCodeCustomWallet,handleCodeBalanceWallet})=>{
    const arrayCategoriesSumary = Object.keys(summaryWallet.categories) 
    const arrayCodeWallets =  Object.keys(summaryWallet.wallets) 
    const getCategoryWallets= (nameCategory) =>{
          return arrayCodeWallets.filter((wallet)=> summaryWallet.wallets[wallet].category===nameCategory)
    }

    const listSelectWallets = arrayCategoriesSumary.map((nameCategory)=>{
        const listWallets = getCategoryWallets(nameCategory,arrayCodeWallets)
        const handleSelectCodeWallet = summaryWallet.categories[nameCategory].addNewWallet===true? handleCodeCustomWallet:handleCodeWallet
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
        <aside className="aside-menu-wallet">
            <div className="aside-menu-wallet__container">
                <div className="aside-menu-wallet__title">Minhas Carteiras</div>
                {listSelectWallets}
                <AsideButton>
                    <img src={sum} alt="" className="aside-button__icon"></img>
                    <span className="aside-button__text">Nova Carteira</span>
                </AsideButton>
            </div>
            <div className="aside-menu-wallet__container">
                <strong className="aside-menu-wallet__title">Balancear Carteiras</strong>
               <SelectWalletToBalance 
                    summaryWallet = {summaryWallet}
                    listWallets={listBalanceWallets}
                    selectCode={selectCodeWallet} 
                    handleSelectCodeWallet={handleCodeBalanceWallet}/>
            </div>
        </aside>
    )
}

AsideMenuWallet.propTypes={
    summaryWallets:PropTypes.object,
    selectCodeWallet:PropTypes.string,
    handleCodeWallet:PropTypes.func,
    handleCodeCustomWallet:PropTypes.func,
    handleCodeBalanceWallet:PropTypes.func
}

export default AsideMenuWallet
