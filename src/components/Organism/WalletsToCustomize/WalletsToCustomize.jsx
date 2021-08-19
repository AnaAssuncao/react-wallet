import React from "react"
import { useState,useEffect } from "react"
import PropTypes from "prop-types"

import { getDataDefaultAssets, sendChanges } from "./getDataAssets"
import { TableWalletsToCustomize } from "../TableWalletsToCustomize"
import { ContainerTitleEditable } from "../../Molecule/ContainerTitleEditable"
import { MainButton } from "../../Atom/MainButton"
import { Loading } from "../../Atom/Loading"

import "./walletsToCustomize.scss"

const WalletsToCustomize = ({selectCodeWallet})=>{
    const [defaultValuesWallet, setDefaultValuesWallet] = useState(null)
    const [changes, setChanges] = useState({totalEquity:{}, assets:{}})
    const [totalPercent, setTotalPercent]=useState(100)
    const nameInput = "Nome da Carteira"

    const handleDefaultValue = (dataAssets)=>{
        setDefaultValuesWallet(dataAssets)
    }
    const handleTotalPercent=(total)=>{
        setTotalPercent(total)
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
        if(totalPercent===1){
            sendChanges(selectCodeWallet,changes)
        }
        else{
            console.log("alerta")
        }
    }
    const cancelWalletsChanges = ()=>{
        setChanges({})
    }
    const deleteWalletChanges= ()=>{
        changes.totalEquity.percentEquity=0
        sendChanges(selectCodeWallet,changes)
    }

    useEffect(()=>{
        (async () =>{
            const assets= await getDataDefaultAssets(selectCodeWallet)
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
                        <MainButton color={"save"} size="large" variant="contained" fontSize="1.1rem"
                                onClick={()=>salveWalletsChanges()}>SALVAR MODIFICAÇÕES</MainButton>
                        <MainButton color={"cancel"} size="large" variant="contained" fontSize="1.1rem"
                                onClick={()=>cancelWalletsChanges()}>CANCELAR MODIFICAÇÕES</MainButton>
                        <MainButton color={"delete"} size="large" variant="contained" fontSize="..1rem"
                            onClick={()=>deleteWalletChanges()}>DELETAR CARTEIRA</MainButton>
                        
                    </div>
                    <TableWalletsToCustomize walletsToCustomize={defaultValuesWallet.assets} 
                                            handleAssetsChanges={handleAssetsChanges}
                                            handleTotalPercent={handleTotalPercent}/>
                </div>
            :
            <Loading className="page-wallets__loading"/>
        }
        </React.Fragment>
    )
}

WalletsToCustomize.propTypes={
    selectCodeWallet:PropTypes.object
}

export default WalletsToCustomize