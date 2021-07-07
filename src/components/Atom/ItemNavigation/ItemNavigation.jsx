import React from 'react'
import PropTypes from 'prop-types'

import './itemNavigation.scss'

const ItemNavigation =({classSelect,name,value,handleSelectNavigations}) =>{
    return (   
        <li className={"itemNavigation " + classSelect} onClick={()=>handleSelectNavigations(value)}> 
            <p className="itemNavigation__name">{name}</p>
        </li>)
}
  
ItemNavigation.propTypes={
    classSelect:PropTypes.string, 
    handleSelectNavigations:PropTypes.func,
    name:PropTypes.string
}


export default ItemNavigation