import {  useState,useEffect }from "react"

import {CardsInvestment} from "../../Atom/CardsInvestment"
import {InvestmentCard} from "../../Molecule/InvestmentCard"
import {getEquity,
        getDataTreemap, 
        getDataTable} from "./getDataAssets"
import { Loading } from'../../Atom/Loading'
import "./walletEquity.scss"
import TreemapChart from "../../Atom/TreemapChart/TreemapChart"

const WalletEquity = () =>{    
    const [equity,setEquity] = useState(false)
    const [dataTreemap,setDataChart] = useState(false)

    const handleEquity = (assets)=>{
        setEquity(assets)
    }
    const handleDataChart = (dataChart)=>{
        setDataChart(dataChart)
    }

    useEffect(()=>{
        (async () =>{
            const assets= await getEquity()
            handleEquity(assets)
        })()
    },[])
    useEffect(()=>{
        (async () =>{
            const dataChart= await getDataTreemap()
            handleDataChart(dataChart)
        })()
    },[])

    return(
        <div className="equity">
            {equity?
                <div className="equity">
                    <CardsInvestment investment={equity.totalEquity}></CardsInvestment>
                    {equity.arrayNameAssets.map((nameAsset,ind)=> 
                      <InvestmentCard key={nameAsset+ind} investment={equity[nameAsset]} nameAsset = {nameAsset} getDataTable={getDataTable}/>)}
                    
                </div>
                :
                 <Loading className="equity__loading"/>
            }
            {dataTreemap?
                <div className="equity__treemap">
                    < TreemapChart dataChart={dataTreemap} sizeChart={"400"}/>
                </div>
                :
                <Loading className="equity__loading"></Loading>
            }
        </div>
    )}

export default WalletEquity