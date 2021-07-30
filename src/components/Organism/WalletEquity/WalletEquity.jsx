import {  useState,useEffect }from "react"

import {CardsInvestment} from "../../Atom/CardsInvestment"
import {InvestmentCard} from "../../Molecule/InvestmentCard"
import {getAllAssets,
        getInfAssetsStocks,
        getInfAssetsDirectTreasure,
        getInfAssetsRealEstateFund,
        getDataTreemap } from "./getDataAssets"
import { Loading } from'../../Atom/Loading'
import "./walletEquity.scss"
import TreemapChart from "../../Atom/TreemapChart/TreemapChart"

const WalletEquity = () =>{
    const {totalEquity,directTreasure,stocks,realEstateFund} = getAllAssets()
    const dataChart= getDataTreemap()
    return(
        <div className="equity">
            <CardsInvestment investment={totalEquity}></CardsInvestment>

            <InvestmentCard investment={directTreasure} getInfAssets = {()=>getInfAssetsDirectTreasure()}></InvestmentCard>

            <InvestmentCard investment={stocks} getInfAssets = {()=>getInfAssetsStocks()}></InvestmentCard>

            <InvestmentCard investment={realEstateFund} getInfAssets = {()=>getInfAssetsRealEstateFund()}></InvestmentCard>
            <div className="equity__treemap">
                < TreemapChart dataChart={dataChart} sizeChart={"400"}></TreemapChart>
            </div>
           
        </div>
    )
}

export default WalletEquity