import {  useState, useEffect } from 'react'

import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {AsideMenuWallet} from "../../components/Organism/AsideMenuWallet"
import { MainWallet } from "../../components/Organism/MainWallet"
import { Loading } from'../../components/Atom/Loading'

import "./wallets.scss"
import{getAllWallets} from "./getDataWallets"

function Wallets(){
    const fistSelectWallet = "TodosAtivos"
    const [nameWallet,setNameWallet] =useState("Todos Ativos")
    const [selectWallet, setSelectWallet ]= useState(fistSelectWallet)
    const [walletsData, setWalletData ]= useState(false)

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
        <div className="page-wallets">
            { walletsData? 
                <div className="page-wallets__container">
                    <ContainerAsidePanel>
                        <AsideMenuWallet 
                            dataSistemWallet={walletsData.sistemWallet} 
                            dataWalletByBrokers={walletsData.walletByBrokers}
                            dataPersonalizedWallet={walletsData.personalizedWallet}
                            balanceWallet={walletsData.balanceWallet}
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
                <Loading className="page-wallets__loading"></Loading>
            }
        </div>
    )
}

export default Wallets