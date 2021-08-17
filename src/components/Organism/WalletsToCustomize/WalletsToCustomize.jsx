import React from "react"
import { useState,useEffect } from "react"
import PropTypes from "prop-types"

import { getDataDefaultAssets } from "./getDataAssets"
import { TableWalletsToCustomize } from "../TableWalletsToCustomize"
import { ContainerTitleEditable } from "../../Molecule/ContainerTitleEditable"
import { MainButton } from "../../Atom/MainButton"
import { Loading } from "../../Atom/Loading"

import "./walletsToCustomize.scss"

const WalletsToCustomize = ({codeWallet})=>{
    const [defaultValuesWallet, setDefaultValuesWallet] = useState(null)
    const [changes, setChanges] = useState({totalEquity:null, assets:null})
    const nameInput = "Nome da Carteira"

    const handleDefaultValue = (dataAssets)=>{
        setDefaultValuesWallet(dataAssets)
    }
    const handleHeaderChanges = (newChange)=>{
        changes.totalEquity=newChange
        setChanges({...changes})
    }
    const handleAssetsChanges = (newChange) =>{
        changes.assets=newChange
        setChanges({...changes})
    }

    const salveWalletsChanges = ()=>{

    }
    const cancelWalletsChanges = ()=>{
        setChanges({})
    }

    useEffect(()=>{
        (async () =>{
            const assets= await getDataDefaultAssets(codeWallet)
            handleDefaultValue(assets)
        })()
    },[])

    return(
        <React.Fragment>
        {defaultValuesWallet?
            <div className="wallets-customize">
                    <header className="wallets-customize__header">
                       <ContainerTitleEditable nameInput={nameInput} 
                                        defaultValuesWallet={defaultValuesWallet}
                                        handleHeaderChanges={handleHeaderChanges}/>
                    </header>
                    <div className="wallets-customize__buttons">
                        <MainButton color={"save"} size="large" variant="contained">SALVAR MODIFICAÇÕES</MainButton>
                        <MainButton color={"cancel"} size="large" variant="contained" 
                                onClick={()=>cancelWalletsChanges()}>CANCELAR MODIFICAÇÕES</MainButton>
                        <MainButton color={"delete"} size="large" variant="contained">DELETAR CARTEIRA</MainButton>
                        
                    </div>
                    <TableWalletsToCustomize walletsToCustomize={defaultValuesWallet.assets} 
                                            handleAssetsChanges={handleAssetsChanges}/>
                </div>
            :
            <Loading className="page-wallets__loading"/>
        }
        </React.Fragment>
    )
}

WalletsToCustomize.propTypes={
    codeWallet:PropTypes.string
}

export default WalletsToCustomize