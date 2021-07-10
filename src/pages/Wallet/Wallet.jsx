import React, {  useState,useEffect } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {WalletAsideMenu} from "../../components/Organism/WalletAsideMenu"
import { MainWallet } from "../../components/Organism/MainWallet"
import { Loading } from'../../components/Atom/Loading'

import "./wallet.scss"
import{getAllWallets} from "./getDataWallets"


function Wallet(){
    const fistSelectWallet = "CEI"
    const [selectWallet, setSelectWallet ]= useState(fistSelectWallet)
    const [walletData, setWalletData ]= useState(false)

    const handleSelectWallet = (selectedWallet) =>{
        setSelectWallet(selectedWallet)
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
                <div>
                    <ContainerAsidePanel>
                        <WalletAsideMenu 
                            dataSistemWallet={walletData.sistemWallet} 
                            dataWalletByBrokers={walletData.walletByBrokers}
                            dataPersonalizedWallet={walletData.personalizedWallet}
                            selectWallet={selectWallet}
                            handleSelectWallet={handleSelectWallet}
                            >
                        </WalletAsideMenu>
                    </ContainerAsidePanel>

                    <ContainerMainPage>
                        <MainWallet nameWallet={selectWallet}>

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