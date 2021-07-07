import React from 'react'
import PropTypes from 'prop-types'

import {ItemNavigation} from "../../Atom/ItemNavigation"
import './navigationBar.scss'

const NavigationBar = ({arrayNamesNavigations,selectNavigation,handleSelectNavigations}) =>{
    const listNavigations = arrayNamesNavigations.map(
        (name) =>{
            const classSelect = selectNavigation===name?"itemNavigation__select":""
            return (   
            <ItemNavigation  key={name}            
                classSelect= {classSelect} 
                handleSelectNavigations={handleSelectNavigations}
                name={name}>
            </ItemNavigation>)
    })

    return (
        <ul className="navigationBar">
           {listNavigations}
        </ul>
    )
}

NavigationBar.propTypes={
    namesNavigations: PropTypes.array,
    select:PropTypes.string,
    handleSelectNavigations:PropTypes.func
}

export default NavigationBar

