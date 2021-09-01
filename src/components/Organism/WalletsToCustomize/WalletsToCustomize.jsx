import {Fragment, useState,useEffect } from "react"
import PropTypes from "prop-types"
import { getDataDefaultAssets, sendChanges } from "./getDataAssets"
import { TableWalletsToCustomize } from "../TableWalletsToCustomize"
import { ContainerTitleEditable } from "../../Molecule/ContainerTitleEditable"
import { ModalAlert } from "../../Atom/ModalAlert"
import { AlertToConfirm } from "../../Atom/AlertToConfirm"
import { Loading } from "../../Atom/Loading"
import returnIcon from "../../../img/return_icon.svg"

import "./walletsToCustomize.scss"

const WalletsToCustomize = ({selectedWalletCode,handlePageReturn})=>{
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
            sendChanges(selectedWalletCode,changes)
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
        const data = {...defaultValuesWallet}
        setDefaultValuesWallet(null)
        setTimeout(()=>{
            setDefaultValuesWallet(data)
        },500)
    }
    const deleteWalletChanges= ()=>{
        changes.totalEquity.percentEquity=0
        sendChanges(selectedWalletCode,changes)
    }

    useEffect(()=>{
        (async () =>{
            const assets= await getDataDefaultAssets(selectedWalletCode)
            handleDefaultValue(assets)
        })()
    },[selectedWalletCode])

    return(
        <Fragment>
        {isDisplayAlert &&
            <AlertToConfirm handleAlert={handleAlert} typeMessage="noSaveWallet" severity="error"/>
        }
        {defaultValuesWallet?
            <div className="wallets-customize">
                    <header className="wallets-customize__header">
                        <img src={returnIcon} loading="lazy" alt="returno" 
                        className="wallets-customize__icon"
                        onClick={handlePageReturn}/>
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
                    <TableWalletsToCustomize walletsToCustomize={defaultValuesWallet.assets} 
                                            handleAssetsChanges={handleAssetsChanges}
                                            handleTotalPercent={handleTotalPercent}/>
                </div>
            :
            <Loading className="page-wallets__loading"/>
        }
        </Fragment>
    )
}

WalletsToCustomize.propTypes={
    selectedWalletCode:PropTypes.string,
    handlePageReturn:PropTypes.func
}

export default WalletsToCustomize