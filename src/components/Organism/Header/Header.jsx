import React from 'react'

import './header.scss'
import textLogo from "../../../img/text_logo2.png"

const Header = () =>{
    return (
        <div className="header">
            <div className="header__logo">
                <img src={textLogo} alt="Logo" className="header__img"></img>
            </div>
            <ul className="header__menu">
                <li className="header__item">Carteiras</li>
                <li className="header__item">Negociações</li>
                <li className="header__item">Inf. Tributos</li>
                <li className="header__item">Configurações</li>
            </ul>

        </div>
    )
}

export default Header