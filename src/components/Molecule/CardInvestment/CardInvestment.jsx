import React from 'react'
import PropTypes from 'prop-types'

import './cardInvestment.scss'
import vector from "../../../img/Vector.svg"

const CardInvestment = ({percenyageInvestment, nameInvestment,costInvestment,resultInvestment,valueInvestment}) => {
  return (
    <div className="cardInvestment">
      <p >{percenyageInvestment}%</p>

      <p className="cardInvestment__name">{nameInvestment}</p>

      <div className={"cardInvestment__container"}>
        <div className={"cardInvestment__card"}>
          <p>Custo</p>
          <div className={"cardInvestment__results"}>
            <p>R$</p>
            <p className={"cardInvestment__currentValue"}>{costInvestment.toFixed(2)}</p>
          </div>
        </div>
        <div className={"cardInvestment__card"}>
          <p>Rentabilidade</p>
          <div className={"cardInvestment__results"}>
            <p>R$</p>
            <p className={"cardInvestment__currentValue"}>{resultInvestment.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={"cardInvestment__total"}>
        <p >Valor Total</p>
        <p className={"cardInvestment__total__value"}> R$ {valueInvestment.toFixed(2)} </p>
      </div>

      <img src={vector} alt="Seta"></img>
     </div>
  )
}

CardInvestment.propTypes = {
  percenyageInvestment: PropTypes.number,
  nameInvestment: PropTypes.string,
  costInvestment: PropTypes.number,
  resultInvestment: PropTypes.number,
  valueInvestment: PropTypes.number
}

export default CardInvestment