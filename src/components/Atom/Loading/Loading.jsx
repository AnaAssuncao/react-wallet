import React from 'react'
import './loading.scss'
import loading from "../../../img/loading.gif"

const Loading = ({className}) => {
  return (
    <div className= {className}>
      <img src={loading} alt={"Carregando..."} className= "loading__img"></img>
    </div>
  )
}

export default Loading