import React, {  useState } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {WalletAsideMenu} from "../../components/Organism/WalletAsideMenu"
import { MainWallet } from "../../components/Organism/MainWallet"

import "./wallet.scss"
import{getAllWallets} from "./getDataWallets"

function Wallet(){
    const wallet={
        data:null, 
        fistSelectWallet:"CEI"
    }
    const [selectWallet, setSelectWallet ]= useState(wallet.fistSelectWallet)

    const handleSelectWallet = (selectedWallet) =>{

        setSelectWallet(selectedWallet)
    }

    wallet.data=getAllWallets()

    return (
        <div className="pageWallet">
            <ContainerAsidePanel>
                <WalletAsideMenu 
                    dataSistemWallet={wallet.data.sistemWallet} 
                    dataWalletByBrokers={wallet.data.walletByBrokers}
                    dataPersonalizedWallet={wallet.data.personalizedWallet}
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
    )
}

export default Wallet