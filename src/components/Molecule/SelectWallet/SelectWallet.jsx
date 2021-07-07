import React from 'react'
import PropTypes from 'prop-types'

import { ItemAside } from '../../Atom/ItemAside'

import './selectWallet.scss'

const SelectWallet = ({infWallets,select,handleSelectWallet}) =>{
    const listWallet = infWallets.wallets.map(
        (inf) =>{
            const classSelect = select===inf.name?"itemAside__select":""
            const keyList = inf.percentage + inf.name
            return (   
            <ItemAside 
                key={keyList}
                classSelect={classSelect} 
                handleSelectWallet={handleSelectWallet}
                infWallet={inf}>
                <strong className="itemAside__percentage">{inf.percentage}%</strong>
                <p className="itemAside__name">{inf.name}</p>
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

