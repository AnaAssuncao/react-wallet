import {  useState,useEffect }from "react"

import {CardsInvestment} from "../../Atom/CardsInvestment"
import {InvestmentCard} from "../../Molecule/InvestmentCard"
import {getAllAssets,
        getDataTreasureTable,
        getDataStocksTable,
        getDataRealEstateFundTable,
        getDataTreemap } from "./getDataAssets"
import { Loading } from'../../Atom/Loading'
import "./walletEquity.scss"
import TreemapChart from "../../Atom/TreemapChart/TreemapChart"

const WalletEquity = () =>{    
    const [allAssets,setAllAssets] = useState(false)
    const [dataTreemap,setDataChart] = useState(false)

    const handleAllAssets = (assets)=>{
        setAllAssets(assets)
    }
    const handleDataChart = (dataChart)=>{
        setDataChart(dataChart)
    }

    useEffect(()=>{
        (async () =>{
            const assets= await getAllAssets()
            handleAllAssets(assets)
        })()
    },[])
    useEffect(()=>{
        (async () =>{
            const dataChart= await getDataTreemap()
            handleDataChart(dataChart)
        })()
    },[])

    return(
        <div>
            {allAssets?
                <div className="equity">
                    <CardsInvestment investment={allAssets.totalEquity}></CardsInvestment>

                    <InvestmentCard investment={allAssets.directTreasure} getInfAssets = {()=>getDataTreasureTable()}></InvestmentCard>

                    <InvestmentCard investment={allAssets.stocks} getInfAssets = {()=>getDataStocksTable()}></InvestmentCard>

                    <InvestmentCard investment={allAssets.realEstateFund} getInfAssets = {()=>getDataRealEstateFundTable()}></InvestmentCard>
                </div>
                :
                <div className="equity__loading"> 
                    <Loading></Loading>
                </div>
            }
            {dataTreemap?
                <div className="equity__treemap">
                    < TreemapChart dataChart={dataTreemap} sizeChart={"400"}></TreemapChart>
                </div>
                :
                <div className="equity__loading"> 
                    <Loading></Loading>
                </div>
            }
        </div>
    )}

export default WalletEquity