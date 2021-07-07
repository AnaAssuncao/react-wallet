import React from 'react'
import PropTypes from 'prop-types'

import './investmentCard.scss'
import vector from "../../../img/Vector.svg"

const InvestmentCard = ({investment}) => {
  console.log(investment.name)
  const {percentage, name,cost,result,amount} =investment
  return (
    <div className="investmentCard">
      <p >{percentage}%</p>

      <p className="investmentCard__name">{name}</p>

      <div className={"investmentCard__container"}>
        <div className={"investmentCard__card"}>
          <p>Custo</p>
          <div className={"investmentCard__results"}>
            <p>R$</p>
            <p className={"investmentCard__currentValue"}>{cost.toFixed(2)}</p>
          </div>
        </div>
        <div className={"investmentCard__card"}>
          <p>Lucro/Prejuízo</p>
          <div className={"investmentCard__results"}>
            <p>R$</p>
            <p className={"investmentCard__currentValue"}>{result.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={"investmentCard__total"}>
        <p >Valor Total</p>
        <p className={"investmentCard__total__value"}> R$ {amount.toFixed(2)} </p>
      </div>

      <img src={vector} alt="Seta"></img>
     </div>
  )
}

InvestmentCard.propTypes = {
    investment:PropTypes.object
}

export default InvestmentCard