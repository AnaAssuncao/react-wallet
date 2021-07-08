import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {PatrimonyWallet} from "../PatrimonyWallet"
import {ContainerNavBar} from "../../Molecule/ContainerNavBar"

import './mainWallet.scss'

const MainWallet = ({nameWallet})=>{
    const arrayNavigations =[
        {
            description:"Patrimônio",
            value:"equity"
        },{
            description:"Rentabilidade",
            value:"profitability"
        },{
            description:"Proventos",
            value:"earnings"
        }
    ]

    const [selectNavigation, setSelectNavigation ]= useState(arrayNavigations[0].value)

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations)
    }

    return (
        <div className="mainWallet">
            <div className="mainWallet__name">
                    {nameWallet}
            </div>
            <ContainerNavBar arrayNavigations={arrayNavigations}
                selectNavigation={selectNavigation}
                handleSelectNavigations={handleSelectNavigations}></ContainerNavBar>  
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