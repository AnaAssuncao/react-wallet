import {Fragment, useState,useEffect,useContext} from "react"
import PropTypes from "prop-types"
import { DataAssetsContext } from "../../../context/dataAssets"
import { CounterPercentage } from "../../Atom/CounterPercentage"
import { AutocompleteInput } from "../../Atom/AutocompleteInput"
import { ModalAlert } from "../../Atom/ModalAlert"
import { Loading } from "../../Atom/Loading"
import DeleteIcon from '@material-ui/icons/Delete';
import "./editableTableRow.scss"

const EditableTableRow = ({handleValuePercentage,deleteEditableRow}) => {
  const setup= {category:null, code:null, description:"", percentCustomed:0}
  const {
    getCategories,
    getCode,
    getDescription }= useContext(DataAssetsContext)
  const [newAssets,setNewAssets] = useState(setup)
  const allCategories =  getCategories()
  const [allCodes, setAllCodes] = useState([{ title: null, value: null }])

  const handleNewValueAssets=(valuePercentage)=>{
    if(newAssets.code){
      newAssets.percentCustomed= valuePercentage/100
      setNewAssets({...newAssets})
      handleValuePercentage(valuePercentage,newAssets.code.value)
    }
  }
  const handleAutocompleteCategory=(newValueCategory)=>{
    newAssets.category = newValueCategory
    newAssets.code = null
    newAssets.description = ""
    setNewAssets({...newAssets})
    // get all codes in useEffect
  }
  const handleAutocompleteCode = (newValueCode)=>{
    newAssets.code = newValueCode
    newAssets.description = getDescription(newAssets.category.value,newValueCode.value)
    newAssets.percentCustomed= 0
    setNewAssets({...newAssets})
  }
  const handleAllCodes= (dataCodes) => setAllCodes(dataCodes)
  const handleDelete = ()=>{
    const percent= 0
    handleValuePercentage(percent,newAssets.code.value)
    deleteEditableRow()
  }

  useEffect(()=>{
    ( () =>{
      if(newAssets.category){
        const dataCodes= getCode(newAssets.category.value)
        handleAllCodes(dataCodes)
      }
    })()
  },[newAssets.category])

  return (
    <Fragment>
    {allCategories?        
        <div className="editable-table-row">
          <AutocompleteInput style={{width:"20%",margin: "0rem 0.5rem"}} 
                            dataInput={allCategories} 
                            nameLabel={"Categoria"} 
                            value={newAssets.category}
                            handleAutocomplete={handleAutocompleteCategory}/>
          
          <AutocompleteInput style={{width:"20%",margin: "0rem 0.5rem"}} 
                            dataInput={allCodes} 
                            nameLabel={"Código"} 
                            value={newAssets.code}
                            handleAutocomplete={handleAutocompleteCode}/>
          <span className="editable-table-row__text" >{newAssets.description} </span>
          <span className="editable-table-row__text">0%</span>
          <CounterPercentage valuePercent={newAssets.percentCustomed}
            colorButton={"dark"}
            maxLength={3}
            widthContainer={"20%"}
            handleValuePercentage={(valuePercentage)=>handleNewValueAssets(valuePercentage)}/>
          <div className="table-row-for-view__button">
            <ModalAlert propsButton={{color:"delete", size:"medium", variant:"contained"}}
                      confirmModal={()=>handleDelete()}
                      typeMessage="deleteRow"> 
              <DeleteIcon style={{margin:"0"}}/>    
            </ModalAlert>
          </div>
      </div>
      :
      <Loading className="editable-table-row__loading"/>
    }
    </Fragment>
  )
}

EditableTableRow.propTypes = {
  handleValuePercentage:PropTypes.func,
  deleteEditableRow:PropTypes.func
}

export default EditableTableRow