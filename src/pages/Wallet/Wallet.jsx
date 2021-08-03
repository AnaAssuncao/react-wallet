import {  useState, useEffect } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {AsideMenuWallet} from "../../components/Organism/AsideMenuWallet"
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
    },[])

    return (
        <div className="page-wallet">
            { walletData? 
                <div className="page-wallet__container">
                    <ContainerAsidePanel>
                        <AsideMenuWallet 
                            dataSistemWallet={walletData.sistemWallet} 
                            dataWalletByBrokers={walletData.walletByBrokers}
                            dataPersonalizedWallet={walletData.personalizedWallet}
                            balanceWallet={walletData.balanceWallet}
                            selectWallet={selectWallet}
                            handleSelectWallet={handleSelectWallet}
                            >
                        </AsideMenuWallet>
                    </ContainerAsidePanel>

                    <ContainerMainPage>
                        <MainWallet nameWallet={nameWallet}>

                        </MainWallet>
                    </ContainerMainPage>
                </div>
                    :
                <Loading className="page-wallet__loading"></Loading>
            }
        </div>
    )
}

export default Wallet