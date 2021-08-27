import { Fragment, useState, useEffect } from 'react'
import { ContainerMainPage } from "../../components/Atom/ContainerMainPage"
import { ContainerAsidePanel } from "../../components/Atom/ContainerAsidePanel"
import {AsideMenuWallet} from "../../components/Organism/AsideMenuWallet"
import { MainWallet } from "../../components/Organism/MainWallet"
import { WalletsToCustomize } from "../../components/Organism/WalletsToCustomize"
import { Loading } from'../../components/Atom/Loading'
import{getAllWallets} from "./getDataWallets"
import "./wallets.scss"

const Wallets = () =>{
    const dataSetup = {
        summaryWallet:false,
        current:{
            codeWallet:null,
            type:null
        },
        previus:{
            codeWallet:null,
            type:null 
        }
    }
    const [walletSetup, setWalletSetup ]= useState(dataSetup)
    const typesWallets={
        wallets:"wallets",
        customWallets:"customWallets",
        balanceWallets:"balanceWallets"
    }     
    const changeWalletPage = (selectedCodeWallet,typeMessage)=>{
        walletSetup.previus.codeWallet = walletSetup.current.codeWallet 
        walletSetup.previus.type= walletSetup.current.type
        walletSetup.current.codeWallet = selectedCodeWallet
        walletSetup.current.type = typeMessage
        setWalletSetup({...walletSetup})
    }
    const handleCodeWallet = (selectedCodeWallet) =>{
        changeWalletPage(selectedCodeWallet,typesWallets.wallets)
    }
    const handleCodeBalanceWallet = (selectedCodeWallet) =>{
        changeWalletPage(selectedCodeWallet,typesWallets.balanceWallets)
    }
    const handleEditableTable = ()=>{
        changeWalletPage(walletSetup.current.codeWallet,typesWallets.customWallets)
    }
    const handlePageReturn = ()=> {
        changeWalletPage(walletSetup.previus.codeWallet,walletSetup.previus.type)
    }
    const handleWalletData = (allWallets)=>{
        walletSetup.summaryWallet=allWallets
        walletSetup.current.codeWallet = allWallets.defaultWallet
        walletSetup.current.type = typesWallets.wallets
        setWalletSetup({...walletSetup})
    }

    useEffect(()=>{
        (async () =>{   
            const allWallets= await getAllWallets()
            handleWalletData(allWallets)
        })()
    },[])

    return (
        <div className="page-wallets">
            { walletSetup.summaryWallet? 
                <Fragment>
                    <ContainerAsidePanel>
                        <AsideMenuWallet 
                            summaryWallet={walletSetup.summaryWallet}
                            selectedWalletCode={walletSetup.current.codeWallet}
                            handleCodeWallet={handleCodeWallet}
                            handleCodeBalanceWallet={handleCodeBalanceWallet}
                            />
                    </ContainerAsidePanel>

                    <ContainerMainPage>
                        {typesWallets.wallets===walletSetup.current.type &&
                            <MainWallet summaryWallet={walletSetup.summaryWallet} 
                            selectedWalletCode={walletSetup.current.codeWallet} 
                            handleEditableTable={handleEditableTable}
                            />
                        }    
                        {typesWallets.customWallets===walletSetup.current.type &&     
                            <WalletsToCustomize selectedWalletCode={walletSetup} handlePageReturn={handlePageReturn}/>
                        }
                        {/* {typesWallets.balanceWallets===walletSetup.current.type &&     
                            <WalletsToCustomize selectedWalletCode={walletSetup} handlePageReturn={handlePageReturn}/>
                        } */}
                    </ContainerMainPage>
                </Fragment>
                    :
                <Loading className="page-wallets__loading"/>
            }
        </div>
    )
}

export default Wallets