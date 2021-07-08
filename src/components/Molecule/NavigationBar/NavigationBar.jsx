import React from 'react'
import PropTypes from 'prop-types'

import {ContainerNavBarItem} from "../../Atom/ContainerNavBarItem"
import './navigationBar.scss'

const NavigationBar = ({arrayNavigations,selectNavigation,handleSelectNavigations}) =>{
    const listNavigations = arrayNavigations.map(
        ({description,value}) =>{
            const classSelect = selectNavigation===value?"containerNavBarItem__select":""
            return (   
            <ContainerNavBarItem  key={value}            
                classSelect= {classSelect} 
                handleSelectNavigations={handleSelectNavigations}
                name={description}
                value={value}>
            </ContainerNavBarItem>)
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

