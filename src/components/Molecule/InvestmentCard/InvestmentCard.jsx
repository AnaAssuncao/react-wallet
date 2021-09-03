import {useState,useEffect }from 'react'
import PropTypes from 'prop-types'

import './investmentCard.scss'
import {HeaderInvestmentCard} from '../HeaderInvestmentCard'
import {DataGrid} from "../../Atom/DataGrid"
import {numberToCurrenty} from "../../../utils/convertData"

const InvestmentCard = ({investment, nameAsset, getDataTable}) => {
  const [isDisplayTable, setDisplayTable] = useState(false)
  const [infoAsset,setInfoAsset]= useState(false)

  const handleDisplayTable =()=>{
    const isDisplay = isDisplayTable===true?false:true
    setDisplayTable(isDisplay)
  }

  const handleInfoAsset = (data)=>{
    const copyAsset = Object.assign({}, data)
    const assetDataFormatted=formatAssets(copyAsset)
    setInfoAsset(assetDataFormatted)
}

const formatAssets = (dataAsset) =>{
  const chancedRows =[]
    dataAsset.rows.forEach((asset,ind)=>{
         chancedRows[ind]=Object.assign({}, asset)
         chancedRows[ind].amount = numberToCurrenty(asset.amount)
         chancedRows[ind].cost = numberToCurrenty(asset.cost)
         chancedRows[ind].result = numberToCurrenty(asset.result)
         chancedRows[ind].percentage = (asset.percentage * 100).toFixed() + "%"
    })
    return {
      rows:chancedRows,
      columns:dataAsset.columns
    }
  }

  useEffect(()=>{
    (async () =>{
        const data= await getDataTable(nameAsset)
        handleInfoAsset(data)
    })()  
},[])

  return (
    <div className="investment-card">
      <HeaderInvestmentCard investment={investment} handleDisplayTable={handleDisplayTable} isDisplayTable={isDisplayTable}></HeaderInvestmentCard>
      {infoAsset &&
        isDisplayTable &&
          <DataGrid columns={infoAsset.columns} rows={infoAsset.rows} >{isDisplayTable}</DataGrid>   
      } 
    </div>
  )
}

InvestmentCard.propTypes = {
    investment:PropTypes.object,
    nameAsset:PropTypes.string,
    getInfAssets:PropTypes.func
}

export default InvestmentCard