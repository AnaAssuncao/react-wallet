import React from 'react'
import PropTypes from 'prop-types'

import './asideMenuItem.scss'

const AsideMenuItem = ({classSelect,wallet,handleSelectWallet,children}) =>{
    return (   
        <li className={"asideMenuItem " + classSelect} 
            onClick={()=>handleSelectWallet(wallet)}> 
            {children}
        </li>)
}

AsideMenuItem.propTypes={
    classSelect: PropTypes.string, 
    value: PropTypes.string,
    handleSelectWallet: PropTypes.func,
    children: PropTypes.array
}

export default AsideMenuItem

