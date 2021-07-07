import React from 'react'
import PropTypes from 'prop-types'

import { ItemAside } from '../../Atom/ItemAside'

import './selectWallet.scss'

const SelectWallet = ({infWallets,select,handleSelectWallet}) =>{
    const listWallet = infWallets.wallets.map(
        (wallet) =>{
            const classSelect = select===wallet.value?"itemAside__select":""
            const keyList = wallet.percentage + wallet.value
            return (   
            <ItemAside 
                key={keyList}
                classSelect={classSelect} 
                handleSelectWallet={handleSelectWallet}
                infWallet={wallet}>
                <strong className="itemAside__percentage">{wallet.percentage}%</strong>
                <p className="itemAside__name">{wallet.name}</p>
            </ItemAside>)
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

