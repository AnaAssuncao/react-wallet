import React, {useState} from 'react'
import PropTypes from 'prop-types'

import { InputText } from "../../Atom/InputText"
import { CounterPercentage } from "../../Atom/CounterPercentage"
import './containerTitleEditable.scss'

const ContainerTitleEditable = ({nameInput,defaultValuesWallet,handleHeaderChanges}) =>{

    const defaultTitle = Object.assign({}, defaultValuesWallet.totalEquity)
    const [dataHeader, setDataHeader]=useState(defaultTitle)

    const handleNameInput =(newNameWallet)=>{
        dataHeader.name=newNameWallet
        setDataHeader(dataHeader)
        handleHeaderChanges({
            name:newNameWallet,
            percent:dataHeader.percentCustomed
        })
    }
    const handleValuePercentage = (valuePercentage)=>{
        const percent = valuePercentage/100
        dataHeader.percentCustomed= percent
        setDataHeader({...dataHeader})
        handleHeaderChanges({
            name:dataHeader.name,
            percent:percent
        })
    }

    return (
        <React.Fragment>
            <InputText nameInput={nameInput} 
                defaultValue={dataHeader.name}
                maxLength={15} 
                onChange={(e)=>handleNameInput(e.target.value)}/>
            <CounterPercentage valuePercent={dataHeader.percentCustomed}
                colorButton={"titleBlue"} 
                maxLength={3} 
                classNameInput = "container-title-editable__counter"
                handleValuePercentage={(valuePercentage)=>handleValuePercentage(valuePercentage)}/> 
            <span className="container-title-editable__text">do Patrimônio</span>
        </React.Fragment>
    )
}

ContainerTitleEditable.propTypes={
    nameInput:PropTypes.string,
    defaultValuesWallet: PropTypes.object,
    handleAssetsChanges: PropTypes.func
}

export default ContainerTitleEditable

