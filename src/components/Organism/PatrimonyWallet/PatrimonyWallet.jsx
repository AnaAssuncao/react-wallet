import React from "react"

import {InvestmentBanner} from "../../Atom/InvestmentBanner"
import {InvestmentCard} from "../../Molecule/InvestmentCard"
import {getAllCards } from "./getDataCards"
import graphic from "../../../img/graphic.png"
import "./patrimonyWallet.scss"

const PatrimonyWallet = () =>{
    const {totalEquity,directTreasure,stocks,realEstateFund} = getAllCards()
    console.log(totalEquity,directTreasure,stocks,realEstateFund)
    return(
        <div className="patrimony">
            <div className="patrimony__banner">
                <InvestmentBanner investment={totalEquity}></InvestmentBanner>
                <div className="patrimony__banner__graphic">
                    <img src={graphic} alt="Grafico" className="patrimony__banner__graphic__img"></img>
                </div>
            </div>
        <InvestmentCard investment={directTreasure}></InvestmentCard>

        <InvestmentCard investment={stocks}></InvestmentCard>

        <InvestmentCard investment={realEstateFund}></InvestmentCard>

        <img src={graphic} alt="Grafico" className="patrimony__graphic__img"></img>   
        </div>
    )
}

export default PatrimonyWallet