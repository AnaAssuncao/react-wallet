import React from "react"

import {InvestmentBanner} from "../../Atom/InvestmentBanner"
import {CardInvestment} from "../../Molecule/CardInvestment"
import {getAllCards } from "./getDataCards"
import graphic from "../../../img/graphic.png"
import "./patrimonyWallet.scss"

const PatrimonyWallet = () =>{
    const {totalEquity,directTreasure,stocks,realEstateFund} = getAllCards()
    return(
        <div className="patrimony">
            <div className="patrimony__banner">
                <InvestmentBanner investment={totalEquity}></InvestmentBanner>
                <div className="patrimony__banner__graphic">
                    <img src={graphic} alt="Grafico" className="patrimony__banner__graphic__img"></img>
                </div>
            </div>
        <CardInvestment investment={directTreasure}></CardInvestment>

        <CardInvestment investment={stocks}></CardInvestment>

        <CardInvestment investment={realEstateFund}></CardInvestment>

        <img src={graphic} alt="Grafico" className="patrimony__graphic__img"></img>   
        </div>
    )
}

export default PatrimonyWallet