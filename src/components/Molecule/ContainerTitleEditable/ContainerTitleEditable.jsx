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
            percent:dataHeader.percentEquity
        })
    }
    const handleValuePercentage = (valuePercentage)=>{
        const percent = valuePercentage/100
        dataHeader.percentEquity= percent
        setDataHeader({...dataHeader})
        handleHeaderChanges({
            name:dataHeader.name,
            percent:percent
        })
    }

    return (
        <div className="container-title-editable">
            <InputText nameInput={nameInput} 
                defaultValue={dataHeader.name}
                maxLength={15} 
                onChange={(e)=>handleNameInput(e.target.value)}/>
            <CounterPercentage valuePercent={dataHeader.percentEquity}
                colorButton={"titleBlue"} 
                maxLength={3} 
                fontSize={1.5}
                handleValuePercentage={(valuePercentage)=>handleValuePercentage(valuePercentage)}/> 
            <span className="container-title-editable__text">do Patrimônio</span>
        </div>
    )
}

ContainerTitleEditable.propTypes={
    nameInput:PropTypes.string,
    defaultValuesWallet: PropTypes.object,
    handleAssetsChanges: PropTypes.func
}

export default ContainerTitleEditable

