import React from 'react'
import PropTypes from 'prop-types'

import {ContainerNavBarItem} from "../../Atom/ContainerNavBarItem"
import './containerNavBar.scss'

const ContainerNavBar = ({arrayNavigations,selectNavigation,handleSelectNavigations}) =>{
    const listNavigations = arrayNavigations.map(
        ({description,value,extraclass,srcImg}) =>{
            const classSelect = selectNavigation===value?"containerNavBarItem__select":""
            return (   
            <ContainerNavBarItem  key={value}            
                classSelect= {classSelect} 
                handleSelectNavigations={handleSelectNavigations}
                name={description}
                value={value}
                extraclass={extraclass}
                srcImg={srcImg}>
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

