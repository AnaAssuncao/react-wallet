import React from 'react'
import PropTypes from 'prop-types'
import './asideButton.scss'

const AsideButton = ({children}) => {
  return (
    <button type="button"  className= "aside-button" onClick={()=>{console.log("Nova Carteira")}}>
      {children}
    </button>
  )
}

AsideButton.propTypes = {
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}

AsideButton.defaultProps = {
  onClick: ()=>{},
}

export default AsideButton