import React from 'react'
import PropTypes from 'prop-types'

import './itemAside.scss'

const ItemAside = ({classSelect,infWallet,handleSelectWallet,...props}) =>{
    return (   
        <li className={"itemAside " + classSelect} 
            onClick={()=>handleSelectWallet(infWallet.name)}> 
            {props.children}
        </li>)
}

ItemAside.propTypes={
    classSelect:PropTypes.string, 
    handleSelectWallet:PropTypes.func,
    children:PropTypes.element
}

export default ItemAside

