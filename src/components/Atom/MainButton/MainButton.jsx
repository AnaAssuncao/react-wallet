import React from 'react'
import PropTypes from 'prop-types'
import './mainButton.scss'

const MainButton = ({children}) => {
  return (
    <button type="button"  className= "mainButton" onClick={()=>{console.log("Nova Carteira")}}>
      {children}
    </button>
  )
}

MainButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

MainButton.defaultProps = {
  onClick: ()=>{},
}

export default MainButton