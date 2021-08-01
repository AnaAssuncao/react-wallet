import React from 'react'
import PropTypes from 'prop-types'

import {HeaderMenuItem} from "../../Atom/HeaderMenuItem"
import './containerMenuHeader.scss'

const ContainerMenuHeader = ({arrayListMenu}) =>{
    const listNavigations = arrayListMenu.map(
        ({name,value,srcImg},ind) =>{
            let extraClass = ""
            if(ind===0){ 
                extraClass="header-menu-item__fist" }
            return (   
            <HeaderMenuItem  key={value}     
                extraClass={extraClass}       
                srcImg={srcImg}
                name={name}
                value={value}>
            </HeaderMenuItem>)
    })

    return (
        <ul className="containerMenuHeader">
           {listNavigations}
        </ul>
    )
}

ContainerMenuHeader.propTypes={
    namesNavigations: PropTypes.array,
    select:PropTypes.string,
    handleSelectNavigations:PropTypes.func
}

export default ContainerMenuHeader

