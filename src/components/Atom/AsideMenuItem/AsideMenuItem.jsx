import React from 'react'
import PropTypes from 'prop-types'

import './asideMenuItem.scss'

const AsideMenuItem = ({classSelect,codeWallet,handleSelectCodeWallet,children}) =>{
    return (   
        <li className={"aside-menu-item " + classSelect} 
            onClick={()=>handleSelectCodeWallet(codeWallet)}> 
            {children}
        </li>)
}

AsideMenuItem.propTypes={
    classSelect: PropTypes.string, 
    value: PropTypes.string,
    handleSelectCodeWallet: PropTypes.func,
    children: PropTypes.array
}

export default AsideMenuItem

