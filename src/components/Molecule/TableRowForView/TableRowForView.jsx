import {useState} from "react"
import PropTypes from "prop-types"
import {CounterPercentage} from "../../Atom/CounterPercentage"
import {ModalAlert} from "../../Atom/ModalAlert"
import DeleteIcon from '@material-ui/icons/Delete';

import "./tableRowForView.scss"

const TableRowForView = ({tableRowData, handleValuePercentage, handleDeleteRow}) => {
  const [percentage, setPercentage] = useState(tableRowData.percentWallet)
  const [newClass,setNewClass] = useState("")

  const handlePercentage = (valuePercentage)=>{
    const value = valuePercentage/100
    setPercentage(value)
    handleValuePercentage(valuePercentage,tableRowData.code)
    handleNewClass(value)
  }
  const handleNewClass = (value)=>{
    if(tableRowData.percentWallet!==value){
      setNewClass(" table-row-for-view--color")
    }
    else{
      setNewClass("")
    }
  }

  const handleDelete = ()=>{
    const percent= 0
    handleValuePercentage(percent,tableRowData.code)
    handleDeleteRow(tableRowData.code)
  }
  
  return (
    <div className={"table-row-for-view"+ newClass}>
      <span className="table-row-for-view__text">{tableRowData.nameCategory}</span>
      <span className="table-row-for-view__text" >{tableRowData.code}</span>
      <span className="table-row-for-view__text" >{tableRowData.description}</span>
      <span className="table-row-for-view__text" >{tableRowData.percentWallet*100}%</span>
      <CounterPercentage valuePercent={percentage}
          colorButton={"dark"}
          maxLength={3}
          style={{width:"20%"}}
          handleValuePercentage={(valuePercentage)=>handlePercentage(valuePercentage)}/>
        <div className="table-row-for-view__button">
          <ModalAlert propsButton={{color:"delete", size:"medium", variant:"contained"}}
                    confirmModal={()=>handleDelete()}
                    typeMessage="deleteRow"> 
            <DeleteIcon style={{margin:"0"}}/>    
          </ModalAlert>
        </div>
    </div>
  )
}

TableRowForView.propTypes = {
  tableRowData: PropTypes.object,
  handleValuePercentage:PropTypes.func,
  handleDeleteRow:PropTypes.func
}

export default TableRowForView