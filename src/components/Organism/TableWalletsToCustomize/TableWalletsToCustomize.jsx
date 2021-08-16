import React from "react"
import { useState } from "react"
import PropTypes from "prop-types"

import { TableRowForView } from "../../Molecule/TableRowForView"
import { MainButton } from "../../Atom/MainButton"
import "./tableWalletsToCustomize.scss"

const TableWalletsToCustomize = ({walletsToCustomize,handleAssetsChanges})=>{
    const defaultWallets = Object.assign({}, walletsToCustomize)
    const [dataTable, setDataTable]=useState({assets:defaultWallets, arrayChangesAssets:[]})
    const keysDataTable = Object.keys(dataTable.assets)
    const total = getTotalAssets(dataTable,keysDataTable) 
    // botão add vai estar neste componente
    const handleValuePercentage = (valuePercentage, codeWallet)=>{
        const percent = valuePercentage/100
        dataTable.assets[codeWallet].percentCustomed= percent
        const infoWalletChanges={
            codeWallet: codeWallet,
            newInfo: percent
        }
        dataTable.arrayChangesAssets.push(infoWalletChanges)
        setDataTable({assets: dataTable.assets, arrayChangesAssets:dataTable.arrayChangesAssets})
        handleAssetsChanges(dataTable.arrayChangesAssets)
    }

    return(
        <React.Fragment>
            <section className="table-wallets-customize">
                <div className="table-wallets-customize__header">
                    <span className="table-wallets-customize__title">Ativos Da Carteira</span>
                    <MainButton>Adicionar</MainButton>
                </div>
                <div className="table-wallets-customize__columns">
                    <span className="table-wallets-customize__cell">CATEGORIA</span>
                    <span className="table-wallets-customize__cell">CÓDIGO ATIVO</span>
                    <span className="table-wallets-customize__cell">DESCRIÇÃO ATIVO</span>
                    <span className="table-wallets-customize__cell">% CARTEIRA ATUAL</span>
                    <span className="table-wallets-customize__cell">% APOS A MUDANÇA</span>  
                </div>
                {keysDataTable.map((codeAssets)=>
                    dataTable.assets[codeAssets].percentCustomed!==0 &&
                    <TableRowForView tableRowData={dataTable.assets[codeAssets]}
                                    handleValuePercentage={handleValuePercentage}
                                    key={codeAssets}
                                    />
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
        </React.Fragment>
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