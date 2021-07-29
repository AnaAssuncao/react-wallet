import React from 'react'
import PropTypes from 'prop-types'

import {ContainerNavBarItem} from "../../Atom/ContainerNavBarItem"
import './containerNavBar.scss'

const ContainerNavBar = ({arrayNavigations,selectNavigation,handleSelectNavigations}) =>{
    const listNavigations = arrayNavigations.map(
        (navBar) =>{
            const classSelect = selectNavigation===navBar.value?"containerNavBarItem__select":""
            return (   
            <ContainerNavBarItem  key={navBar.value}            
                classSelect= {classSelect} 
                handleSelectNavigations={handleSelectNavigations}
                name={navBar.description}
                navBar={navBar}
                extraclass={navBar.extraclass}
                srcImg={navBar.srcImg}>
            </ContainerNavBarItem>)
    })

    return (
        <ul className="containerNavBar">
           {listNavigations}
        </ul>
    )
}

ContainerNavBar.propTypes={
    namesNavigations: PropTypes.array,
    select:PropTypes.string,
    handleSelectNavigations:PropTypes.func
}

export default ContainerNavBar

