import React from "react"
import PropTypes from "prop-types"
import "./counterPercentage.scss"

const CounterPercentage = ({valuePercent,colorButton,handleValuePercentage,classNameInput}) => {
  const value = Number((valuePercent*100).toFixed())

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
    <div className="counter-percentage">
        <button className="counter-percentage__button" 
                style={{backgroundColor:colorButton}}
                onClick={() => handleChanceNumber(-1)}>-</button>
        <div className="counter-percentage__value" style={{color:colorButton}}> 
            <input type="text"
                    style={{color:colorButton}}
                    className={"counter-percentage__input " + classNameInput}
                    value={value}
                    onChange={(e)=>handleChange(e.target.value)} 
                    />%
        </div>
        <button className="counter-percentage__button" 
                style={{backgroundColor:colorButton}}
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