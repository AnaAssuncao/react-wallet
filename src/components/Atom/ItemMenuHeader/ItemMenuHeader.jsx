import React from 'react'
import PropTypes from 'prop-types'

import './itemMenuHeader.scss'

const ItemMenuHeader =({extraClass,name,srcImg}) =>{
    return (   
        <li className={"itemMenuHeader " + extraClass}> 
            <img src={srcImg} loading="lazy" alt="" className="itemMenuHeader__icon"></img>
            <p className="itemMenuHeader__text">{name}</p>
        </li>)
}
  
ItemMenuHeader.propTypes={
    classSelect:PropTypes.string, 
    scrImg:PropTypes.string, 
    name:PropTypes.string
}


export default ItemMenuHeader