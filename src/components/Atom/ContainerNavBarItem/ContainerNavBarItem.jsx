import React from 'react'
import PropTypes from 'prop-types'

import './containerNavBarItem.scss'

const ContainerNavBarItem =({classSelect,name,value, extraclass, srcImg, handleSelectNavigations}) =>{
    return (   
        <li className={"containerNavBarItem " +  extraclass} onClick={()=>handleSelectNavigations(value)}>
            <img src={srcImg} alt="" className="containerNavBarItem__icon"></img>
            <p className={ "containerNavBarItem__name " + classSelect } >{name}</p>
        </li>)
}
  
ContainerNavBarItem.propTypes={
    classSelect:PropTypes.string, 
    handleSelectNavigations:PropTypes.func,
    name:PropTypes.string
}


export default ContainerNavBarItem