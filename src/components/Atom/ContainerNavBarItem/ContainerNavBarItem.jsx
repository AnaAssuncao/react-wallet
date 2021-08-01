import React from 'react'
import PropTypes from 'prop-types'

import './containerNavBarItem.scss'

const ContainerNavBarItem =({classSelect,name, extraclass, srcImg,navBar, handleSelectNavigations}) =>{
    return (   
        <li className={"nav-bar-item " +  extraclass} onClick={()=>handleSelectNavigations(navBar)}>
            <img src={srcImg} alt="" className="nav-bar-item__icon"></img>
            <p className={ "nav-bar-item__name " + classSelect } >{name}</p>
        </li>)
}
  
ContainerNavBarItem.propTypes={
    classSelect:PropTypes.string, 
    handleSelectNavigations:PropTypes.func,
    name:PropTypes.string
}


export default ContainerNavBarItem