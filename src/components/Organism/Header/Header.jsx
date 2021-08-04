import React from "react"

import {ContainerMenuHeader} from "../../Molecule/ContainerMenuHeader"
import {Logo} from "../../Atom/Logo"

import walletIcon from "../../../img/wallet_icon.svg"
import transactionsIcon from "../../../img/transactions_icon.svg"
import calcIcon from "../../../img/calc_icon.svg"
import newsIcon from "../../../img/news_icon.svg"
import chartIcon from "../../../img/chart_icon.svg"
import configIcon from "../../../img/config_icon.svg"

import "./header.scss"
const Header = () =>{
    const arrayListMenu =[
        {name:"CARTEIRAS",value:"wallet", srcImg:walletIcon},
        {name:"NEGOCIAÇÕES",value:"negotiations", srcImg:transactionsIcon},
        {name:"INFO. TRIBUTOS",value:"taxes", srcImg:calcIcon},
        {name:"NOTÍCIAS",value:"news", srcImg:newsIcon},
        {name:"INDICADORES",value:"indicators", srcImg:chartIcon}]        
        
    return (
        <header className="header">
            <div className="header__logo">
                <Logo></Logo>
            </div>
            <div  className="header__menu">
                <ContainerMenuHeader arrayListMenu={arrayListMenu}>
                </ContainerMenuHeader>
            </div>
            <div>
            <div className={"header__config"}> 
                <img src={configIcon} loading="lazy" alt="" className="header-menu-item__icon"></img>
                <p className="header-menu-item__text">CONFIGURAÇÕES</p>
             </div>
            </div>

        </header>
    )
}

export default Header