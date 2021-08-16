import React from 'react'
import PropTypes from 'prop-types'
import './mainButton.scss'

const MainButton = ({children,...others}) => {

  return (
    <button type="button" className= "main-button" {...others}>
      {children}
    </button>
  )
}

MainButton.propTypes = {
  children: PropTypes.string,
}

MainButton.defaultProps = {
  onClick: ()=>{},
}

export default MainButton