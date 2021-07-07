import React, {  useState } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {AsideWallet} from "../../components/Organism/AsideWallet"
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

    const arrayNavigations =[ "Patrimônio","Rentabilidade","Proventos"]

    return (
        <div className="pageWallet">
            <ContainerAsidePanel>
                <AsideWallet 
                    dataSistemWallet={wallet.data.sistemWallet} 
                    dataWalletByBrokers={wallet.data.walletByBrokers}
                    dataPersonalizedWallet={wallet.data.personalizedWallet}
                    selectWallet={selectWallet}
                    handleSelectWallet={handleSelectWallet}
                    >
                </AsideWallet>
            </ContainerAsidePanel>

            <ContainerMainPage>
                <MainWallet nameWallet={selectWallet} arrayNavigations={arrayNavigations}>

                </MainWallet>
            </ContainerMainPage>
        </div>
    )
}

export default Wallet