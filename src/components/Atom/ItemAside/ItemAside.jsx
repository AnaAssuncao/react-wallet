import React from 'react'
import PropTypes from 'prop-types'

import './itemAside.scss'

const ItemAside = ({classSelect,value,handleSelectWallet,children}) =>{
    return (   
        <li className={"itemAside " + classSelect} 
            onClick={()=>handleSelectWallet(value)}> 
            {children}
        </li>)
}

ItemAside.propTypes={
    classSelect:PropTypes.string, 
    handleSelectWallet:PropTypes.func,
    children:PropTypes.array
}

export default ItemAside

