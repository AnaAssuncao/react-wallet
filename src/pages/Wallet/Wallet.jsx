import React, {  useState,useEffect } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {WalletAsideMenu} from "../../components/Organism/WalletAsideMenu"
import { MainWallet } from "../../components/Organism/MainWallet"
import { Loading } from'../../components/Atom/Loading'

import "./wallet.scss"
import{getAllWallets} from "./getDataWallets"


function Wallet(){
    const fistSelectWallet = "TodosAtivos"
    const [nameWallet,setNameWallet] =useState("Todos Ativos")
    const [selectWallet, setSelectWallet ]= useState(fistSelectWallet)
    const [walletData, setWalletData ]= useState(false)

    const handleSelectWallet = (selectedWallet) =>{
        setNameWallet(selectedWallet.name)
        setSelectWallet(selectedWallet.value)
    }

    const handleWalletData = (allWallets)=>{
        setWalletData(allWallets)
    }

    useEffect(()=>{
        (async () =>{
            const allWallets= await getAllWallets()
            handleWalletData(allWallets)
        })()
    })

    return (
        <div className="pageWallet">
            { walletData? 
                <div className="pageWallet__container">
                    <ContainerAsidePanel>
                        <WalletAsideMenu 
                            dataSistemWallet={walletData.sistemWallet} 
                            dataWalletByBrokers={walletData.walletByBrokers}
                            dataPersonalizedWallet={walletData.personalizedWallet}
                            balanceWallet={walletData.balanceWallet}
                            selectWallet={selectWallet}
                            handleSelectWallet={handleSelectWallet}
                            >
                        </WalletAsideMenu>
                    </ContainerAsidePanel>

                    <ContainerMainPage>
                        <MainWallet nameWallet={nameWallet}>

                        </MainWallet>
                    </ContainerMainPage>
                </div>
                    :
                <div className="pageWallet__loading">
                    <Loading  ></Loading>
                </div>
            }
        </div>
    )
}

export default Wallet