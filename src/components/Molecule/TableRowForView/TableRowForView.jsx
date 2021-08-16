import React from "react"
import PropTypes from "prop-types"
import {CounterPercentage} from "../../Atom/CounterPercentage"
import {MainButton} from "../../Atom/MainButton"

import "./tableRowForView.scss"

const TableRowForView = ({tableRowData, handleValuePercentage}) => {
  return (
    <div className="table-row-for-view">
      <span className="table-row-for-view__text">{tableRowData.nameCategory}</span>
      <span className="table-row-for-view__text" >{tableRowData.code}</span>
      <span className="table-row-for-view__text" >{tableRowData.name}</span>
      <span className="table-row-for-view__text" >{tableRowData.percentWallet*100}%</span>
      <CounterPercentage valuePercent={tableRowData.percentCustomed}
        colorButton={"#1D2731"}
        maxLength={3}
        handleValuePercentage={(valuePercentage)=>handleValuePercentage(valuePercentage,tableRowData.code)}/>
       <MainButton className="table-row-for-view__button" onClick={()=>handleValuePercentage(0,tableRowData.code)}>Deletar</MainButton>
    </div>
  )
}

TableRowForView.propTypes = {
  tableRowData: PropTypes.object
}

export default TableRowForView