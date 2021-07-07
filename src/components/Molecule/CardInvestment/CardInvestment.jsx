import React from 'react'
import PropTypes from 'prop-types'

import './cardInvestment.scss'
import vector from "../../../img/Vector.svg"

const CardInvestment = ({investment}) => {
  const {percentage, name,cost,result,amount} =investment
  return (
    <div className="cardInvestment">
      <p >{percentage}%</p>

      <p className="cardInvestment__name">{name}</p>

      <div className={"cardInvestment__container"}>
        <div className={"cardInvestment__card"}>
          <p>Custo</p>
          <div className={"cardInvestment__results"}>
            <p>R$</p>
            <p className={"cardInvestment__currentValue"}>{cost.toFixed(2)}</p>
          </div>
        </div>
        <div className={"cardInvestment__card"}>
          <p>Lucro/Prejuízo</p>
          <div className={"cardInvestment__results"}>
            <p>R$</p>
            <p className={"cardInvestment__currentValue"}>{result.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={"cardInvestment__total"}>
        <p >Valor Total</p>
        <p className={"cardInvestment__total__value"}> R$ {amount.toFixed(2)} </p>
      </div>

      <img src={vector} alt="Seta"></img>
     </div>
  )
}

CardInvestment.propTypes = {
    investment:PropTypes.object
}

export default CardInvestment