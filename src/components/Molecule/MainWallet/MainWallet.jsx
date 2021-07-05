import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {PatrimonyWallet} from "../PatrimonyWallet"
import {ItemNavigations} from "../../Atom/ItemNavigations"

import './mainWallet.scss'

const MainWallet = ({nameWallet})=>{
    const arrayNamesNavigations =[ "Patrimônio","Rentabilidade","Proventos"]
    const fistSelectWallet = arrayNamesNavigations[0]
    const [selectNavigation, setSelectNavigation ]= useState(fistSelectWallet)

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations)
    }
    return (
        <div className="mainWallet">
            <div className="mainWallet__name">
                    {nameWallet}
            </div>
            <ItemNavigations arrayNamesNavigations={arrayNamesNavigations}
                selectNavigation={selectNavigation}
                handleSelectNavigations={handleSelectNavigations}></ItemNavigations>  
                <div className="mainWallet__content">
                <PatrimonyWallet></PatrimonyWallet>
                    </div>  

        </div>
    )
}

MainWallet.propTypes={
    nameWallet:PropTypes.string
}

export default MainWallet