import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"

import { TableRowForView } from "../../Molecule/TableRowForView"
import { MainButton } from "../../Atom/MainButton"
import "./tableWalletsToCustomize.scss"

const TableWalletsToCustomize = ({walletsToCustomize,handleAssetsChanges})=>{
    const namesHeader = ["CATEGORIA","CÓDIGO ATIVO","DESCRIÇÃO ATIVO","% CARTEIRA ATUAL","% APOS A MUDANÇA"]
    const defaultWallets = Object.assign({}, walletsToCustomize)
    const [dataTable, setDataTable]=useState({assets:defaultWallets,changesAssets:{}})
    const keysDataTable = Object.keys(dataTable.assets)
    const total = getTotalAssets(dataTable,keysDataTable) 

    const handleValuePercentage = (valuePercentage, codeWallet)=>{
        const percent = valuePercentage/100
        dataTable.assets[codeWallet].percentCustomed= percent
        dataTable.changesAssets[codeWallet]={   
            codeWallet: codeWallet,
            newInfo: percent
        }
        setDataTable({assets: dataTable.assets, changesAssets:dataTable.changesAssets})
        handleAssetsChanges(dataTable.changesAssets)
    }

    return(
        <section className="table-wallets-customize">
            <div className="table-wallets-customize__header">
                <span className="table-wallets-customize__title">Ativos Da Carteira</span>
                <MainButton color={"save"} size="medium" variant="outlined">+ ADICIONAR NOVO ATIVO</MainButton>
            </div>
            <div className="table-wallets-customize__columns">
                {namesHeader.map((name)=>{    
                    return <span className="table-wallets-customize__cell" key={name}>{name}</span>
                })}
            </div>
            {keysDataTable.map((codeAssets)=>
                    dataTable.assets[codeAssets].percentCustomed>=0 &&
                    <TableRowForView tableRowData={dataTable.assets[codeAssets]}
                                    handleValuePercentage={handleValuePercentage}
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
    codeWallet:PropTypes.string,
    handleAssetsChanges:PropTypes.func,
}

export default TableWalletsToCustomize

function getTotalAssets(dataTable, nameKeys){
    return nameKeys.reduce((valueTotal, nameKey)=>{
        return valueTotal + dataTable.assets[nameKey].percentCustomed
    },0)
}