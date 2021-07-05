import React from 'react'
import PropTypes from 'prop-types'

import './itemWallet.scss'

const ItemWallet = ({infWallets,select,handleSelectWallet}) =>{
    const listWallet = infWallets.wallets.map(
        (inf) =>{
            const keyList = inf.percentage+inf.name
            const classSelect = select===inf.name?"itemWallet__item__select":""
            return (   
            <li 
                className= {"itemWallet__item "+ classSelect} 
                key={keyList}
                onClick={()=>handleSelectWallet(inf.name)}>
                <strong className="itemWallet__percentage">{inf.percentage}%</strong>
                <p className="itemWallet__name">{inf.name}</p>
            </li>)
    })

    return (
        <ul className="itemWallet">
           <strong className="itemWallet__title">{infWallets.name}</strong>
           {listWallet}
        </ul>
    )
}

ItemWallet.propTypes={
    infWallet: PropTypes.object,
    select:PropTypes.string,
    handleSelectWallet:PropTypes.func
}

export default ItemWallet

