import React from "react"
import PropTypes from "prop-types"
import "./inputText.scss"

const InputText = ({nameInput,...others}) => {
  return (
    <div className="input-text">
      <p className="input-text__name">{nameInput}</p>
      <input type="text" 
            className="input-text__input"
            {...others}/>
    </div>
  )
}

InputText.propTypes={
  nameInput:PropTypes.string, 
  maxlength:PropTypes.number,
  handleInputText:PropTypes.func
}

export default InputText