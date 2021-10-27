import React from 'react'
import PropTypes from 'prop-types'

import './asideMenuItem.scss'

const AsideMenuItem = ({selectedItemClass,codeWallet,handleSelectCodeWallet,children}) =>{
    return (   
        <li className={"aside-menu-item " + selectedItemClass} 
            onClick={()=>handleSelectCodeWallet(codeWallet)}> 
            {children}
        </li>)
}

AsideMenuItem.propTypes={
    selectedItemClass: PropTypes.string, 
    value: PropTypes.string,
    handleSelectCodeWallet: PropTypes.func,
    children: PropTypes.array
}

export default AsideMenuItem

