import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {WalletEquity} from "../WalletEquity"
import {ContainerNavBar} from "../../Molecule/ContainerNavBar"
import gold from "../../../img/gold_icon.svg"
import pig from "../../../img/pig_icon.svg"
import chart from "../../../img/chart2_icon.svg"

import './mainWallet.scss'

const MainWallet = ({nameWallet})=>{
    const arrayNavigations =[
        {
            description:"Patrimônio",
            value:"equity",
            extraclass:"containerNavBarItem__fist",
            srcImg:gold
        },{
            description:"Rentabilidade",
            value:"profitability",
            extraclass:"",
            srcImg:pig
        },{
            description:"Proventos",
            value:"earnings",
            extraclass:"",
            srcImg:chart
        }
    ]

    const [selectNavigation, setSelectNavigation ]= useState(arrayNavigations[0].value)

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations)
    }

    return (
        <div className="mainWallet">
            <div className="mainWallet__title">
                <div className="mainWallet__name">{nameWallet}</div>
                <div className="mainWallet__percentage">({100} % do Patrimônio)</div>
            </div>
            
            <ContainerNavBar arrayNavigations={arrayNavigations}
                selectNavigation={selectNavigation}
                handleSelectNavigations={handleSelectNavigations}></ContainerNavBar>  
            <div className="mainWallet__content">
                <WalletEquity></WalletEquity>
            </div>  

        </div>
    )
}

MainWallet.propTypes={
    nameWallet:PropTypes.string
}

export default MainWallet