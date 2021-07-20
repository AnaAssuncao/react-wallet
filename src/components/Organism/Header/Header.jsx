import React from 'react'

import {ContainerMenuHeader} from '../../Molecule/ContainerMenuHeader'
import {Logo} from '../../Atom/Logo'

import './header.scss'
const Header = () =>{
    const arrayListMenu =[
        {name:"CARTEIRAS",value:"wallet", srcImg:"https://uploads-ssl.webflow.com/5e70e7ceff01278b0a221b74/60e9d7d19eacf8582aae84c6_wallet_icon2.svg", extraClass:"itemMenuHeader__fist"},
        {name:"NEGOCIAÇÕES",value:"negotiations", srcImg:"https://uploads-ssl.webflow.com/5e70e7ceff01278b0a221b74/60e9d92402e5226b099abc2a_transactions.svg", extraClass:""},
        {name:"INFO. TRIBUTOS",value:"taxes", srcImg:"https://uploads-ssl.webflow.com/5e70e7ceff01278b0a221b74/60e9d9b44b8a526e823b23d5_Taxs.png", extraClass:""},
        {name:"NOTÍCIAS",value:"news", srcImg:"https://uploads-ssl.webflow.com/5e70e7ceff01278b0a221b74/60e9dbb5c8ec34246ea4cd62_news2.svg", extraClass:""},
        {name:"INDICADORES",value:"indicators", srcImg:"https://uploads-ssl.webflow.com/5e70e7ceff01278b0a221b74/60e9df510ad554abc07fdf69_chart.svg", extraClass:""}]        
        
    const srcImgConfig="https://uploads-ssl.webflow.com/5e70e7ceff01278b0a221b74/60e9da3e4cbd09147cb53fc2_config.svg"
    return (
        <div className="header">
            <div className="header__logo">
                <Logo></Logo>
            </div>
            <div  className="header__menu">
                <ContainerMenuHeader arrayListMenu={arrayListMenu}>
                </ContainerMenuHeader>
            </div>
            <div>
            <div className={"header__config"}> 
                <img src={srcImgConfig} loading="lazy" alt="" className="itemMenuHeader__icon"></img>
                <p className="itemMenuHeader__text">CONFIGURAÇÕES</p>
             </div>
            </div>

        </div>
    )
}

export default Header