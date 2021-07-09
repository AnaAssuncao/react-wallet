import React from "react"

import {InvestmentBanner} from "../../Atom/InvestmentBanner"
import {InvestmentCard} from "../../Molecule/InvestmentCard"
import {getAllAssets,
        getInfAssetsStocks,
        getInfAssetsDirectTreasure,
        getInfAssetsRealEstateFund } from "./getDataAssets"
import graphic from "../../../img/graphic.png"
import "./walletEquity.scss"

const WalletEquity = () =>{
    const {totalEquity,directTreasure,stocks,realEstateFund} = getAllAssets()
    return(
        <div className="equity">
            <div className="equity__banner">
                <InvestmentBanner investment={totalEquity}></InvestmentBanner>
                <div className="equity__banner__graphic">
                    <img src={graphic} alt="Grafico" className="equity__banner__graphic__img"></img>
                </div>
            </div>
        <InvestmentCard investment={directTreasure} getInfAssets = {()=>getInfAssetsDirectTreasure}></InvestmentCard>

        <InvestmentCard investment={stocks} getInfAssets = {()=>getInfAssetsStocks}></InvestmentCard>

        <InvestmentCard investment={realEstateFund} getInfAssets = {()=>getInfAssetsRealEstateFund}></InvestmentCard>

        <img src={graphic} alt="Grafico" className="equity__graphic__img"></img>   
        </div>
    )
}

export default WalletEquity