import React from 'react'
import PropTypes from 'prop-types'

import {ItemNavigation} from "../../Atom/ItemNavigation"
import './navigationBar.scss'

const NavigationBar = ({arrayNavigations,selectNavigation,handleSelectNavigations}) =>{
    const listNavigations = arrayNavigations.map(
        ({description,value}) =>{
            const classSelect = selectNavigation===value?"itemNavigation__select":""
            return (   
            <ItemNavigation  key={value}            
                classSelect= {classSelect} 
                handleSelectNavigations={handleSelectNavigations}
                name={description}
                value={value}>
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

