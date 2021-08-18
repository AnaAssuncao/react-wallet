import {useState} from "react"
import PropTypes from "prop-types"
import {CounterPercentage} from "../../Atom/CounterPercentage"
import {MainButton} from "../../Atom/MainButton"

import "./tableRowForView.scss"

const TableRowForView = ({tableRowData, handleValuePercentage, handleDeleteRow}) => {
  const [percentage, setPercentage] = useState(tableRowData.percentWallet)

  const handlePercentage = (valuePercentage)=>{
    const value = valuePercentage/100
    setPercentage(value)
    handleValuePercentage(valuePercentage,tableRowData.code)
  }

  const handleDelete = ()=>{
    const percent= 0
    handleValuePercentage(percent,tableRowData.code)
    handleDeleteRow(tableRowData.code)
  }

  return (
    <div className="table-row-for-view">
      <span className="table-row-for-view__text">{tableRowData.nameCategory}</span>
      <span className="table-row-for-view__text" >{tableRowData.code}</span>
      <span className="table-row-for-view__text" >{tableRowData.name}</span>
      <span className="table-row-for-view__text" >{tableRowData.percentWallet*100}%</span>
      <CounterPercentage valuePercent={percentage}
        colorButton={"dark"}
        maxLength={3}
        style={{width:"10rem"}}
        handleValuePercentage={(valuePercentage)=>handlePercentage(valuePercentage)}/>
       <MainButton color={"delete"} size="medium" style={{marginLeft:"1rem"}} 
                  onClick={()=>handleDelete()}>Deletar</MainButton>
    </div>
  )
}

TableRowForView.propTypes = {
  tableRowData: PropTypes.object
}

export default TableRowForView