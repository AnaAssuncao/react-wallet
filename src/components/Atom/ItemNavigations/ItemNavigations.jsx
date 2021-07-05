import React from 'react'
import PropTypes from 'prop-types'

import './itemNavigations.scss'

const ItemNavigations = ({arrayNamesNavigations,selectNavigation,handleSelectNavigations}) =>{
    const listNavigations = arrayNamesNavigations.map(
        (name) =>{
            const keyList = name
            const classSelect = selectNavigation===name?"itemNavigations__item__select":""
            return (   
            <li 
                className= {"itemNavigations__item "+ classSelect} 
                key={keyList}
                onClick={()=>handleSelectNavigations(name)}>
                    {name}
            </li>)
    })

    return (
        <ul className="itemNavigations">
           {listNavigations}
        </ul>
    )
}

ItemNavigations.propTypes={
    namesNavigations: PropTypes.array,
    select:PropTypes.string,
    handleSelectNavigations:PropTypes.func
}

export default ItemNavigations

