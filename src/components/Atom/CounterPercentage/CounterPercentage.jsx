import React from "react"
import PropTypes from "prop-types"
import { getColors } from "../../../utils/colors"
import "./counterPercentage.scss"

const CounterPercentage = ({valuePercent,colorButton,handleValuePercentage,widthContainer,fontSize}) => {
  const value = Number((valuePercent*100).toFixed())
  const colors = getColors(colorButton)
  const fontSizeInput = fontSize? fontSize:1
  const widthInput = fontSizeInput * 2 + "rem"

  const handleChange = (valueChance) =>{
    if(valueChance>0 && valueChance<100){
      handleValuePercentage(valueChance)
    }
    else if(valueChance<=0 || valueChance===""){
      handleValuePercentage(0)
    }
    else{
      handleValuePercentage(100)
    }
  }
  const handleChanceNumber=(numberChange)=>{
    const newValue=value + numberChange
    handleChange(newValue)
  }
  
  return (
    <div className="counter-percentage" style={{width:widthContainer}}>
        <button className="counter-percentage__button" 
                style={{backgroundColor:colors.background}}
                onClick={() => handleChanceNumber(-1)}>-</button>
        <div className="counter-percentage__value" style={{color:colors.background, fontSize:fontSizeInput+"rem"}}> 
            <input type="text"
                    className={"counter-percentage__input"}
                    style={{color:colors.background, width:widthInput, fontSize:fontSizeInput+"rem"}}
                    value={value}
                    onChange={(e)=>handleChange(e.target.value)} 
                    />%
        </div>
        <button className="counter-percentage__button" 
                style={{backgroundColor:colors.background}}
                onClick={() => handleChanceNumber(1)}>+</button>
    </div>
  )
}

CounterPercentage.propTypes={
  valuePercent:PropTypes.number,
  colorButton:PropTypes.string, 
  maxLength:PropTypes.number,
  handleValuePercentage:PropTypes.func
}

export default CounterPercentage