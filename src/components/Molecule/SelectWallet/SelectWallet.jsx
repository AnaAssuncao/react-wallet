import React from 'react'
import PropTypes from 'prop-types'

import { AsideMenuItem } from '../../Atom/AsideMenuItem'
import arrow from "../../../img/arrow.svg"

import './selectWallet.scss'

const SelectWallet = ({infWallets,select,handleSelectWallet}) =>{
    const listWallet = infWallets.wallets.map(
        (wallet) =>{
            debugger
            const classSelect = select===wallet.value?"asideMenuItem__select":""
            const keyList = wallet.percentage + wallet.value
            return (   
            <AsideMenuItem
                key={keyList}
                classSelect={classSelect} 
                handleSelectWallet={handleSelectWallet}
                wallet={wallet}>
                <p className="asideMenuItem__name">{wallet.name}</p>
                <p className="asideMenuItem__percentage">({wallet.percentage}% P)</p>
            </AsideMenuItem>)
    })

    return (
        <div className="selectWallet">
            {infWallets.name &&
                <div className="selectWallet__title">
                    <img src={arrow} alt="" className="selectWallet__icon"></img>
                    <strong className="selectWallet__text">{infWallets.name}</strong>
                </div>
            }
            <ul className="selectWallet__list">
                {listWallet}
            </ul>
        </div>
    )
}

SelectWallet.propTypes={
    infWallets: PropTypes.object,
    select:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default SelectWallet

