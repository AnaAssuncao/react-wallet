import React from "react"
import { useState,useEffect } from "react"
import PropTypes from "prop-types"
import Alert from '@material-ui/lab/Alert';

import { getDataDefaultAssets, sendChanges } from "./getDataAssets"
import { TableWalletsToCustomize } from "../TableWalletsToCustomize"
import { ContainerTitleEditable } from "../../Molecule/ContainerTitleEditable"
import { ModalAlert } from "../../Atom/ModalAlert"
import { Loading } from "../../Atom/Loading"

import "./walletsToCustomize.scss"

const WalletsToCustomize = ({selectCodeWallet})=>{
    const [defaultValuesWallet, setDefaultValuesWallet] = useState(null)
    const [changes, setChanges] = useState({totalEquity:{}, assets:{}})
    const [totalPercent, setTotalPercent]=useState(100)
    const [isDisplayAlert, setIsDisplayAlert]=useState(false)
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
    const handleAlert= () =>{
        const alert= isDisplayAlert? false:true
        setIsDisplayAlert(alert)
    }
    const salveWalletsChanges = ()=>{
        const total = 1
        if(totalPercent===total){
            sendChanges(selectCodeWallet,changes)
            if(isDisplayAlert){
                handleAlert()
            }
        }
        else{
            if(isDisplayAlert===false){
                handleAlert()
            }
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
                        <ModalAlert propsButton={{color:"save", size:"large", variant:"contained", fontSize:"1.1rem"}}
                                confirmModal={salveWalletsChanges}
                                typeMessage="saveWallet">SALVAR MODIFICAÇÕES</ModalAlert>
                        <ModalAlert propsButton={{color:"cancel", size:"large", variant:"contained", fontSize:"1.1rem"}}
                            confirmModal={cancelWalletsChanges}
                            typeMessage="cancelWallet">CANCELAR MODIFICAÇÕES</ModalAlert>
                        <ModalAlert propsButton={{color:"delete", size:"large", variant:"contained", fontSize:"1.1rem"}}
                                confirmModal={deleteWalletChanges}
                                typeMessage="deleteWallet">DELETAR CARTEIRA</ModalAlert>
                    </div>
                    {isDisplayAlert &&
                        <Alert severity="error" onClose={handleAlert}>Não foi possível salvar a carteira, complete 100% no total geral</Alert>
                    }
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