import React from 'react'
import PropTypes from 'prop-types'

import './investmentBanner.scss'

const InvestmentBanner = ({amountTotal,costTotalInvestment, resultTotalInvestment}) => {
  return (
    <div className="investmentBanner">
      <div className="investmentBanner__totalPatrimony">
        <p className="totalPatrimony__text">Total Patrimônio da Carteira</p>
        <strong className="totalPatrimony__value">R$ {amountTotal.toFixed(2)}</strong>
      </div>
      <div className={"investmentBanner__container"}>
        <div className={"investmentBanner__card"}>
          <p>Custo</p>
          <div className={"investmentBanner__results"}>
            <p>R$</p>
            <p className={"investmentBanner__currentValue"}>{costTotalInvestment.toFixed(2)}</p>
          </div>
        </div>
        <div className={"investmentBanner__card"}>
          <p>Rentabilidade</p>
          <div className={"investmentBanner__results"}>
            <p>R$</p>
            <p className={"investmentBanner__currentValue"}>{resultTotalInvestment.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

InvestmentBanner.propTypes = {
  amountTotal: PropTypes.number,
  costTotalInvestment: PropTypes.number, 
  resultTotalInvestment: PropTypes.number
}


export default InvestmentBanner