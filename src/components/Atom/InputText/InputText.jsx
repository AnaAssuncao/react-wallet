import React from "react"
import PropTypes from "prop-types"
import "./inputText.scss"

const InputText = ({nameInput,maxLength,handleInputText}) => {
  return (
    <div className="input-text">
      <p className="input-text__name">{nameInput}</p>
      <input type="text" 
            maxLength={maxLength} 
            className="input-text__input"
            onChance={handleInputText}/>
    </div>
  )
}

InputText.propTypes={
  nameInput:PropTypes.string, 
  maxlength:PropTypes.number,
  handleInputText:PropTypes.func
}

export default InputText