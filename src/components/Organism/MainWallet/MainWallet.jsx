import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {PatrimonyWallet} from "../PatrimonyWallet"
import {NavigationBar} from "../../Molecule/NavigationBar"

import './mainWallet.scss'

const MainWallet = ({nameWallet})=>{
    const arrayNamesNavigations =[ "Patrimônio","Rentabilidade","Proventos"]
    const fistSelectWallet = arrayNamesNavigations[0]
    const [selectNavigation, setSelectNavigation ]= useState(fistSelectWallet)

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations)
        console.log(selectedNavigations)
    }

    return (
        <div className="mainWallet">
            <div className="mainWallet__name">
                    {nameWallet}
            </div>
            <NavigationBar arrayNamesNavigations={arrayNamesNavigations}
                selectNavigation={selectNavigation}
                handleSelectNavigations={handleSelectNavigations}></NavigationBar>  
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