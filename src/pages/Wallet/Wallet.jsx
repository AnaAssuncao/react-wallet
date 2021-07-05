import React from 'react'
import { useState } from 'react'

import { ContainerMainPage } from "../../components/Organism/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Organism/ContainerAsidePanel"
import {AsideWallet} from "../../components/Molecule/AsideWallet"
import { MainWallet } from "../../components/Molecule/MainWallet"

import "./wallet.scss"
import{getAllWallet} from "./getData"

function Wallet(){
    const data = getAllWallet()

    const fistSelectWallet = "CEI"
    const [selectWallet, setSelectWallet ]= useState(fistSelectWallet)

    const handleSelectWallet = (selectedWallet) =>{
        setSelectWallet(selectedWallet)
    }

    const arrayNavigations =[ "Patrimônio","Rentabilidade","Proventos"]

    return (
        <div className="pageWallet">
            <ContainerAsidePanel>
                <AsideWallet 
                    dataSistemWallet={data.sistemWallet} 
                    dataWalletByBrokers={data.walletByBrokers}
                    dataPersonalizedWallet={data.personalizedWallet}
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