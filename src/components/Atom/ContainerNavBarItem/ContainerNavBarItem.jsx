import React from 'react'
import PropTypes from 'prop-types'

import './containerNavBarItem.scss'

const ContainerNavBarItem =({classSelect,name,value,handleSelectNavigations}) =>{
    return (   
        <li className={"containerNavBarItem " + classSelect} onClick={()=>handleSelectNavigations(value)}> 
            <p className="containerNavBarItem__name">{name}</p>
        </li>)
}
  
ContainerNavBarItem.propTypes={
    classSelect:PropTypes.string, 
    handleSelectNavigations:PropTypes.func,
    name:PropTypes.string
}


export default ContainerNavBarItem