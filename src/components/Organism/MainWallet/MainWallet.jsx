import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {WalletEquity} from "../WalletEquity"
import {ContainerNavBar} from "../../Molecule/ContainerNavBar"
import gold from "../../../img/gold_icon.svg"
import pig from "../../../img/pig_icon.svg"
import chart from "../../../img/chart2_icon.svg"

import './mainWallet.scss'

const MainWallet = ({summaryWallet,selectCodeWallet})=>{
    const arrayNavigations =[
        {
            description:"Patrimônio",
            value:"equity",
            extraclass:"containerNavBarItem__fist",
            srcImg:gold
        },
        {
            description:"Proventos",
            value:"earnings",
            extraclass:"",
            srcImg:pig
        },
        {
            description:"Rentabilidade",
            value:"profitability",
            extraclass:"",
            srcImg:chart
        }
    ]

    const [selectNavigation, setSelectNavigation ]= useState(arrayNavigations[0].value)
    const nameWallet = summaryWallet.wallets[selectCodeWallet].name
    const percentageWallet = summaryWallet.wallets[selectCodeWallet].percentEquity * 100

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations.value)
    }

    return (
        <div className="main-wallet">
            <div className="main-wallet__title">
                <div className="main-wallet__name">{nameWallet}</div>
                <div className="main-wallet__percentage">({percentageWallet} % do Patrimônio)</div>
            </div>
            
            <ContainerNavBar arrayNavigations={arrayNavigations}
                selectNavigation={selectNavigation}
                handleSelectNavigations={handleSelectNavigations}/>
            <div className="main-wallet__container">
                <WalletEquity></WalletEquity>
            </div>  
        </div>
    )
}

MainWallet.propTypes={
    nameWallet:PropTypes.string
}

export default MainWallet