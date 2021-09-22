import { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { AlertToConfirm } from "../../Atom/AlertToConfirm"
import { WalletEquity } from "../WalletEquity"
import { ContainerNavBar } from "../../Molecule/ContainerNavBar"
import { MainButton } from "../../Atom/MainButton"
import gold from "../../../img/gold_icon.svg"
import pig from "../../../img/pig_icon.svg"
import chart from "../../../img/chart2_icon.svg"
import EditIcon from '@material-ui/icons/Edit';

import './mainWallet.scss'
import WalletEarnings from '../WalletEarnings/WalletEarnings'

const arrayNavigations =[
    {
        description:"Patrimônio",
        value:"equity",
        extraclass:"containerNavBarItem__fist",
        srcImg:gold
    },
    {
        description:"Proventos",
        value:"earnings",
        extraclass:"",
        srcImg:pig
    },
    {
        description:"Rentabilidade",
        value:"",
        extraclass:"",
        srcImg:chart
    }
]

const MainWallet = ({summaryWallet,selectedWalletCode,handleEditableTable})=>{
    const [alert,setAlert]=useState({isAlert:false,message:null,severity:null})
    const [selectNavigation, setSelectNavigation ]= useState(arrayNavigations[0].value)
    const nameWallet = summaryWallet.wallets[selectedWalletCode].name
    const percentageWallet = summaryWallet.wallets[selectedWalletCode].percentEquity * 100

    const handleSelectNavigations = (selectedNavigations) =>{
        setSelectNavigation(selectedNavigations.value)
    }
    const handleAlertClosure = () =>{
        setAlert({isAlert:false,message:null,severity:null})
    }
    const handleMsgAlert = (message,severity) =>{
        setAlert({isAlert:true,message:message,severity:severity})
        setTimeout(()=>{
            handleAlertClosure()
        },50000)
    }
    const componentsWallets ={
        equity:(<WalletEquity/>),
        earnings:(<WalletEarnings handleMsgAlert={handleMsgAlert}/>),
        profitability:null
    }
    
    return (
        <Fragment>
        { alert.isAlert === true &&  
            <AlertToConfirm handleAlert={handleAlertClosure} typeMessage={alert.message} severity={alert.severity}/>
        } 
        <div className="main-wallet"> 
            <div className="main-wallet__title">
                <span className="main-wallet__name">{nameWallet}</span>
                <span className="main-wallet__percentage">({percentageWallet} % do Patrimônio)</span>
                {summaryWallet.wallets[selectedWalletCode].editable===true &&
                    <div className="main-wallet__button-edit">
                        <MainButton color={"titleBlue"} 
                            size="medium"
                            onClick={()=>handleEditableTable()} 
                            variant="outlined"
                            fontSize="0.9rem"
                            startIcon={<EditIcon/>}>Editar</MainButton>
                    </div>
            }
            </div>

            <ContainerNavBar arrayNavigations={arrayNavigations}
                selectNavigation={selectNavigation}
                handleSelectNavigations={handleSelectNavigations}/>
            <div className="main-wallet__container">
                {
                    componentsWallets[selectNavigation]
                }
            </div>  
        </div>
        </Fragment>
    )
}

MainWallet.propTypes={
    summaryWallet:PropTypes.object,
    selectedWalletCode:PropTypes.string,
    handleEditableTable:PropTypes.func
}

export default MainWallet