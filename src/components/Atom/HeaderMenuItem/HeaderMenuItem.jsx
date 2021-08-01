import React from 'react'
import PropTypes from 'prop-types'

import './headerMenuItem.scss'

const HeaderMenuItem =({extraClass,name,srcImg}) =>{
    return (   
        <li className={"header-menu-item " + extraClass}> 
            <img src={srcImg} loading="lazy" alt="" className="header-menu-item__icon"></img>
            <p className="header-menu-item__text">{name}</p>
        </li>)
}
  
HeaderMenuItem.propTypes={
    classSelect:PropTypes.string, 
    scrImg:PropTypes.string, 
    name:PropTypes.string
}


export default HeaderMenuItem