import React from 'react'
import PropTypes from 'prop-types'

import './itemAside.scss'

const ItemAside = ({classSelect,infWallet,handleSelectWallet,children}) =>{
    return (   
        <li className={"itemAside " + classSelect} 
            onClick={()=>handleSelectWallet(infWallet.name)}> 
            {children}
        </li>)
}

ItemAside.propTypes={
    classSelect:PropTypes.string, 
    handleSelectWallet:PropTypes.func,
    children:PropTypes.element
}

export default ItemAside

