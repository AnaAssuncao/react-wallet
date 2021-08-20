import { useState } from "react"
import PropTypes from "prop-types"
import { DataAssetsProvider } from "../../../context/dataAssets"
import { TableRowForView } from "../../Molecule/TableRowForView"
import { EditableTableRow } from "../../Molecule/EditableTableRow"
import { MainButton } from "../../Atom/MainButton"
import AddIcon from '@material-ui/icons/Add';
import "./tableWalletsToCustomize.scss"

const TableWalletsToCustomize = ({walletsToCustomize,handleAssetsChanges,handleTotalPercent})=>{
    const namesHeader = ["CATEGORIA","CÓDIGO","DESCRIÇÃO","% DA CARTEIRA","% DESEJADA"]
    const defaultWallets = Object.assign({}, walletsToCustomize)
    const [dataTable, setDataTable]=useState(defaultWallets)  
    const [changesAssets, setChangesAssets] = useState({})
    const [dataEditable, setDataEditable]=useState([])  
    const keysDataTable = Object.keys(dataTable)
    const [allPercentages, setAllPercentages] = useState(getCodeAndPercent(keysDataTable,dataTable))
    const total =  getTotalAssets(allPercentages)
    handleTotalPercent(total)

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
    const handleDeleteRow = (codeWallet)=>{
        delete dataTable[codeWallet]
        allPercentages.codeWallet = 0
        setDataTable({...dataTable})
        setAllPercentages({...allPercentages})
    }
    const handleNewAssets = () =>{
        const key = "dataEditable" + dataEditable.length
        dataEditable.push(key)
        setDataEditable([...dataEditable])
    }
    const handleDeleteEditableRow = (indice) =>{
        dataEditable.splice(indice, 1)
        setDataEditable([...dataEditable])
    }   

    return(
        <section className="table-wallets-customize">
            <div className="table-wallets-customize__header">
                <span className="table-wallets-customize__title">Ativos Da Carteira</span>
                <MainButton color={"save"} 
                            size="medium"
                            onClick={()=>handleNewAssets()} 
                            variant="outlined"
                            fontSize="0.8rem"
                            startIcon={<AddIcon/>}>ADICIONAR NOVO ATIVO</MainButton>
            </div>
            <div className="table-wallets-customize__columns">
                {namesHeader.map((name)=>{    
                    return <span className="table-wallets-customize__cell" key={name}>{name}</span>
                })}
            </div>
            <DataAssetsProvider>
                {dataEditable.map((key,indice)=>{
                    return <EditableTableRow key={key} 
                            handleValuePercentage={handleValuePercentage}
                            handleDeleteEditableRow={()=>handleDeleteEditableRow(indice)}/>
                     })
                }
            </DataAssetsProvider>
            {keysDataTable.map((codeAssets)=>
                    dataTable[codeAssets] &&
                    <TableRowForView tableRowData={dataTable[codeAssets]}
                                    handleValuePercentage={handleValuePercentage}
                                    handleDeleteRow={handleDeleteRow}
                                key={codeAssets}/>            
            )}
            <div className="table-wallets-customize__footer">
                <div>
                    <span className="table-wallets-customize__total">TOTAL GERAL</span>
                    <span className="table-wallets-customize__value-total">{(total*100).toFixed()} %</span>
                </div>
                {total>1 &&
                    <p className="table-wallets-customize__text-alert">Valor acima de 100%</p>}
                {total>0 && total<1 &&
                    <p className="table-wallets-customize__text-alert">Complete até 100%</p>}
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