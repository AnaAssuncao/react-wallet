import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {WalletEquity} from "../WalletEquity"
import {ContainerNavBar} from "../../Molecule/ContainerNavBar"
import {MainButton} from "../../Atom/MainButton"
import gold from "../../../img/gold_icon.svg"
import pig from "../../../img/pig_icon.svg"
import chart from "../../../img/chart2_icon.svg"
import EditIcon from '@material-ui/icons/Edit';

import './mainWallet.scss'

const MainWallet = ({summaryWallet,selectedWalletCode,handleEditableTable})=>{
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
    const nameWallet = summaryWallet.wallets[selectedWalletCode].name
    const percentageWallet = summaryWallet.wallets[selectedWalletCode].percentEquity * 100

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations.value)
    }
    return (
        <div className="main-wallet">
            <div className="main-wallet__title">
                <span className="main-wallet__name">{nameWallet}</span>
                <span className="main-wallet__percentage">({percentageWallet} % do Patrimônio)</span>
            </div>
            {summaryWallet.wallets[selectedWalletCode].editable===true &&
            <div className="main-wallet__button-edit">
                <MainButton color={"save"} 
                    size="medium"
                    onClick={()=>handleEditableTable()} 
                    variant="outlined"
                    fontSize="0.8rem"
                    startIcon={<EditIcon/>}>Editar Carteira</MainButton>
            </div>
            }
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
    summaryWallet:PropTypes.object,
    selectedWalletCode:PropTypes.string,
    handleEditableTable:PropTypes.func
}

export default MainWallet