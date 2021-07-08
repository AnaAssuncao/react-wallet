import React from 'react'
import PropTypes from 'prop-types'

import { AsideMenuItem } from '../../Atom/AsideMenuItem'

import './selectWallet.scss'

const SelectWallet = ({infWallets,select,handleSelectWallet}) =>{
    const listWallet = infWallets.wallets.map(
        (wallet) =>{
            const classSelect = select===wallet.value?"asideMenuItem__select":""
            const keyList = wallet.percentage + wallet.value
            return (   
            <AsideMenuItem
                key={keyList}
                classSelect={classSelect} 
                handleSelectWallet={handleSelectWallet}
                value={wallet.value}>
                <strong className="asideMenuItem__percentage">{wallet.percentage}%</strong>
                <p className="asideMenuItem__name">{wallet.name}</p>
            </AsideMenuItem>)
    })

    return (
        <div>
            <strong className="selectWallet__title">{infWallets.name}</strong>
            <ul className="selectWallet">
                {listWallet}
            </ul>
        </div>
    )
}

SelectWallet.propTypes={
    infWallet: PropTypes.object,
    select:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default SelectWallet

