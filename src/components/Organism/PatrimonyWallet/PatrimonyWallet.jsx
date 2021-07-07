import React from "react"

import {InvestmentBanner} from "../../Atom/InvestmentBanner"
import {CardInvestment} from "../../Molecule/CardInvestment"
import graphic from "../../../img/graphic.png"
import "./patrimonyWallet.scss"

const PatrimonyWallet = () =>{
    return(
        <div className="patrimony">
            <div className="patrimony__banner">
                <InvestmentBanner 
                    amountTotal={100000}
                    costTotalInvestment={90000}
                    resultTotalInvestment={10000}></InvestmentBanner>
                <div className="patrimony__banner__graphic">
                    <img src={graphic} alt="Grafico" className="patrimony__banner__graphic__img"></img>
                </div>
            </div>
        <CardInvestment
            percenyageInvestment={12}
            nameInvestment={"Tesouro Direto"}
            costInvestment={100000}
            resultInvestment={100000}
            valueInvestment={100000}></CardInvestment>

        <CardInvestment
            percenyageInvestment={12}
            nameInvestment={"Açoes"}
            costInvestment={100000}
            resultInvestment={100000}
            valueInvestment={100000}></CardInvestment>

        <CardInvestment
            percenyageInvestment={12}
            nameInvestment={"FII"}
            costInvestment={100000}
            resultInvestment={100000}
            valueInvestment={100000}></CardInvestment>

        <img src={graphic} alt="Grafico" className="patrimony__graphic__img"></img>   
        </div>
    )
}

export default PatrimonyWallet