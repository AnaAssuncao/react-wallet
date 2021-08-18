import React, {useState,useEffect,useContext} from "react"
import PropTypes from "prop-types"
import { DataAssetsContext } from "../../../context/dataAssets"
import { CounterPercentage } from "../../Atom/CounterPercentage"
import { AutocompleteInput } from "../../Atom/AutocompleteInput"
import { MainButton } from "../../Atom/MainButton"
import { Loading } from "../../Atom/Loading"
import DeleteIcon from '@material-ui/icons/Delete';
import "./editableTableRow.scss"

const EditableTableRow = ({handleValuePercentage,handleDeleteEditableRow}) => {
  const {
    getCategories,
    getCode,
    getDescription }= useContext(DataAssetsContext)
  const [newAssets,setNewAssets] = useState({category:{title:"",value:null}, code:"", description:" - ", percentCustomed:0})
  const allCategories =  getCategories()
  const [allCodes, setAllCodes] = useState([{title:"",value:""}])

  const handleNewValueAssets=(valuePercentage)=>{
    if(newAssets.code){
      newAssets.percentCustomed= valuePercentage/100
      setNewAssets({...newAssets})
      handleValuePercentage(valuePercentage,newAssets.code)
    }
  }
  const handleAutocompleteCategory=(category)=>{
    newAssets.category = category? category:{title:"",value:null}
    newAssets.code = ""
    newAssets.description = " - "
    setNewAssets({...newAssets})
  }
  const handleAutocompleteCode = ({title,value})=>{
    if(newAssets.code!==""){
        handleValuePercentage(0,newAssets.code)
    }
    newAssets.code = value
    newAssets.description = getDescription(newAssets.category.value,value)
    newAssets.percentCustomed= 0
    setNewAssets({...newAssets})
  }
  const handleAllCodes= (dataCodes) => setAllCodes(dataCodes)
  const handleDelete = ()=>{
    const percent= 0
    handleValuePercentage(percent,newAssets.code)
    handleDeleteEditableRow()
  }

  useEffect(()=>{
    ( () =>{
      if(newAssets.category.value){
        const dataCodes= getCode(newAssets.category.value)
        handleAllCodes(dataCodes)
      }
    })()
  },[newAssets.category.value])

  return (
    <React.Fragment>
    {allCategories?        
        <div className="editable-table-row">
          <AutocompleteInput style={{width:"12rem",margin: "0rem 0.5rem"}} 
                            dataInput={allCategories} 
                            inputValue={newAssets.category.title}
                            nameLabel={"Categoria"} 
                            handleAutocomplete={handleAutocompleteCategory}/>
          
          <AutocompleteInput style={{width:"12rem",margin: "0rem 0.5rem"}} 
                            dataInput={allCodes} 
                            inputValue={newAssets.code}
                            nameLabel={"Código"} 
                            handleAutocomplete={handleAutocompleteCode}/>
          <span className="editable-table-row__text" >{newAssets.description} </span>
          <span className="editable-table-row__text">0%</span>
          <CounterPercentage valuePercent={newAssets.percentCustomed}
            colorButton={"dark"}
            maxLength={3}
            style={{width:"12rem"}}
            handleValuePercentage={(valuePercentage)=>handleNewValueAssets(valuePercentage)}/>
        <MainButton color={"delete"} size="medium"
                    onClick={handleDelete}>
        <DeleteIcon style={{margin:"0"}}/>    
      </MainButton>
      </div>
      :
      <Loading className="editable-table-row__loading"/>
    }
    </React.Fragment>
  )
}

EditableTableRow.propTypes = {
  handleValuePercentage:PropTypes.func,
  handleDeleteEditableRow:PropTypes.func
}

export default EditableTableRow