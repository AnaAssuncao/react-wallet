import {useState} from "react"
import PropTypes from "prop-types"

import { AsideMenuItem } from "../../Atom/AsideMenuItem"
import arrow from "../../../img/arrow.svg"

import "./selectWallet.scss"

const SelectWallet = ({infWallets,select,handleSelectWallet}) =>{
    const [isDisplayWallets,SetIsDisplayWallets] =useState(true)
    const listWallet = infWallets.wallets.map(
        (wallet) =>{
            const classSelect = select===wallet.value?"aside-menu-item__select":""
            const keyList = wallet.percentage + wallet.value
            return (   
            <AsideMenuItem
                key={keyList}
                classSelect={classSelect} 
                handleSelectWallet={handleSelectWallet}
                wallet={wallet}>
                <p className="aside-menu-item__name">{wallet.name}</p>
                <p className="aside-menu-item__percentage">({wallet.percentage}% P)</p>
            </AsideMenuItem>)
    })

    const handlesDisplayWallets=()=>{
        const isDisplay= isDisplayWallets===true? false:true
        SetIsDisplayWallets(isDisplay)
    }

    return (
        <div className="select-wallet">
            {infWallets.name &&
                <div className="select-wallet__title">
                    <img src={arrow} alt="" className="select-wallet__icon" onClick={handlesDisplayWallets}></img>
                    <strong className="select-wallet__text">{infWallets.name}</strong>
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
    infWallets: PropTypes.object,
    select:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default SelectWallet

