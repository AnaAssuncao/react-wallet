import {useState} from "react"
import PropTypes from "prop-types"

import { AsideMenuItem } from "../../Atom/AsideMenuItem"
import arrow from "../../../img/arrow.svg"

import "./selectWallet.scss"

const SelectWallet = ({summaryWallet,nameCategory, listWallets,selectCode,handleSelectCodeWallet}) =>{

    const [isDisplayWallets,SetIsDisplayWallets] =useState(true)
    const listWallet = listWallets.map(
        (codeWallet) =>{
            const selectedItemClass = selectCode===codeWallet?"aside-menu-item__selected":""
            const keyList = codeWallet
            const nameWallet = summaryWallet.wallets[codeWallet].name
            const percentageWallet = summaryWallet.wallets[codeWallet].percentEquity*100

            return (   
            <AsideMenuItem
                key={keyList}
                selectedItemClass={selectedItemClass} 
                handleSelectCodeWallet={handleSelectCodeWallet}
                codeWallet={codeWallet}>
                <span className="aside-menu-item__name">{nameWallet}</span>
                <span className="aside-menu-item__percentage">({percentageWallet}% P)</span>
            </AsideMenuItem>)
    })

    const handlesDisplayWallets=()=>{
        const isDisplay= isDisplayWallets===true? false:true
        SetIsDisplayWallets(isDisplay)
    }

    return (
        <div className="select-wallet">
            {nameCategory &&
                <div className="select-wallet__title">
                    <img src={arrow} alt="" className="select-wallet__icon" onClick={handlesDisplayWallets}></img>
                    <strong className="select-wallet__text">{summaryWallet.categories[nameCategory].title}</strong>
                </div>
            }
            {
                isDisplayWallets &&
                    <ul className="select-wallet__list">
                        {listWallet}
                    </ul>
            }
        </div>
    )
}

SelectWallet.propTypes={
    infoWallets: PropTypes.object,
    select:PropTypes.string,
    handleSelectCodeWallet:PropTypes.func
}

export default SelectWallet

