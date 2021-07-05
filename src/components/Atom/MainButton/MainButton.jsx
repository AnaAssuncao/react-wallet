import React from 'react'
import PropTypes from 'prop-types'
import './mainButton.scss'

const MainButton = ({text}) => {
  return (
    <button type="button"  className= "mainButton" onClick={()=>{console.log("Nova Carteira")}}>
      {text}
    </button>
  )
}

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

MainButton.defaultProps = {
  onClick: ()=>{},
}

export default MainButton