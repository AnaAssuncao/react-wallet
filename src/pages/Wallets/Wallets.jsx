import React, {  useState, useEffect } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {AsideMenuWallet} from "../../components/Organism/AsideMenuWallet"
import { MainWallet } from "../../components/Organism/MainWallet"
import { Loading } from'../../components/Atom/Loading'

import "./wallets.scss"
import{getAllWallets} from "./getDataWallets"

const Wallets = () =>{
    const [selectCodeWallet, setSelectCodeWallet ]= useState(null)
    const [summaryWallet, setSummaryWallet ]= useState(false)
 
    const handleSelectCodeWallet = (selectedCodeWallet) =>{
        setSelectCodeWallet(selectedCodeWallet)
    }
    
    const handleWalletData = (allWallets)=>{
        setSelectCodeWallet(allWallets.defaultWallet)
        setSummaryWallet(allWallets)
    }

    useEffect(()=>{
        (async () =>{
            const allWallets= await getAllWallets()
            handleWalletData(allWallets)
        })()
    },[])

    return (
        <div className="page-wallets">
            { summaryWallet? 
                <React.Fragment>
                    <ContainerAsidePanel>
                        <AsideMenuWallet 
                            summaryWallet={summaryWallet}
                            selectCodeWallet={selectCodeWallet}
                            handleSelectCodeWallet={handleSelectCodeWallet}
                            />
                    </ContainerAsidePanel>

                    <ContainerMainPage>
                        <MainWallet summaryWallet={summaryWallet} selectCodeWallet={selectCodeWallet}/>
                    </ContainerMainPage>
                </React.Fragment>
                    :
                <Loading className="page-wallets__loading"/>
            }
        </div>
    )
}

export default Wallets