import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { DataAssetsProvider } from "../../../context/dataAssets"
import { TableRowForView } from "../../Molecule/TableRowForView"
import { EditableTableRow } from "../../Molecule/EditableTableRow"
import { MainButton } from "../../Atom/MainButton"
import { TotalWallet } from "../../Atom/TotalWallet"
import AddIcon from '@material-ui/icons/Add';
import "./tableWalletsToCustomize.scss"

const TableWalletsToCustomize = ({walletsToCustomize,handleAssetsChanges,handleTotalPercent})=>{
    const namesHeader = ["CATEGORIA","CÓDIGO","DESCRIÇÃO","% DA CARTEIRA","% DESEJADO"]
    const defaultWallets = Object.assign({}, walletsToCustomize)
    const [dataTable, setDataTable]=useState(defaultWallets)  
    const [changesAssets, setChangesAssets] = useState({})
    const [dataEditable, setDataEditable]=useState([])  
    const keysDataTable = Object.keys(dataTable)
    const [allPercentages, setAllPercentages] = useState(getCodeAndPercent(keysDataTable,dataTable))
    const total =  getTotalAssets(allPercentages)

    useEffect(()=>{
        handleTotalPercent(total)
    },[allPercentages,total])

    const handleValuePercentage = (valuePercentage, codeWallet)=>{
        const percent = valuePercentage/100
        changesAssets[codeWallet]={   
            codeWallet: codeWallet,
            newInfo: percent
        }
        allPercentages[codeWallet] = percent
        setChangesAssets({...changesAssets})
        setAllPercentages({...allPercentages})
        handleAssetsChanges(changesAssets)
    }
    const deleteRow = (codeWallet)=>{
        delete dataTable[codeWallet]
        allPercentages.codeWallet = 0
        setDataTable({...dataTable})
        setAllPercentages({...allPercentages})
    }
    const addNewAssets = () =>{
        const number = (Math.random()*100).toFixed()
        const key = "dataEditable" + dataEditable.length + number
        const newArray = [key].concat(dataEditable)
        setDataEditable(newArray)
    }
    const deleteEditableRow = (indice) =>{
        dataEditable.splice(indice, 1)
        setDataEditable([...dataEditable])
    }   

    if(keysDataTable.length===0 && dataEditable.length===0){
        addNewAssets()
    }

    return(
        <section className="table-wallets-customize">
            <div className="table-wallets-customize__header">
                <span className="table-wallets-customize__title">Ativos Da Carteira</span>
                <MainButton color={"save"} 
                            size="medium"
                            onClick={()=>addNewAssets()} 
                            variant="outlined"
                            fontSize="0.8rem"
                            startIcon={<AddIcon/>}>ADICIONAR NOVO ATIVO</MainButton>
            </div>
            <div className="table-wallets-customize__columns">
                {namesHeader.map((name)=>{    
                    return <span className="table-wallets-customize__cell" key={name}>{name}</span>
                })}
            </div>
            <div className="table-wallets-customize__rows">
                <DataAssetsProvider>
                    {dataEditable.map((key,indice)=>{
                        return <EditableTableRow key={key} 
                                    handleValuePercentage={handleValuePercentage}
                                    deleteEditableRow={()=>deleteEditableRow(indice)}/>
                        })
                    }
                </DataAssetsProvider>
                {keysDataTable.map((codeAssets)=>
                        dataTable[codeAssets] &&
                        <TableRowForView tableRowData={dataTable[codeAssets]}
                                        handleValuePercentage={handleValuePercentage}
                                        deleteRow={deleteRow}
                                    key={codeAssets}/>            
                )}
            </div>

            <div className="table-wallets-customize__footer">
                <TotalWallet total={total}/>
            </div>
        </section>
    ) 
}

TableWalletsToCustomize.propTypes={
    walletsToCustomize:PropTypes.object,
    handleAssetsChanges:PropTypes.func,
    handleTotalPercent:PropTypes.func,
}

export default TableWalletsToCustomize

function getTotalAssets(allPercentages){
    const namesCode = Object.keys(allPercentages)
    return namesCode.reduce((valueTotal, nameCode)=>{
        return valueTotal + allPercentages[nameCode]
    },0)
}

function getCodeAndPercent(keysDataTable,dataTableAssets){
    const allPercentages = {}
    keysDataTable.forEach((nameKey)=>{
        const code = dataTableAssets[nameKey].code
        allPercentages[code]=dataTableAssets[nameKey].percentWallet
    })
    return allPercentages
}