import React from 'react'
import PropTypes from 'prop-types'

import './investmentBanner.scss'

const InvestmentBanner = ({investment}) => 
{
  const {amount,cost, result} = investment
    return (
      <div className="investmentBanner">
        <div className="investmentBanner__totalPatrimony">
          <p className="totalPatrimony__text">Total Patrimônio da Carteira</p>
          <strong className="totalPatrimony__value">R$ {amount.toFixed(2)}</strong>
        </div>
        <div className={"investmentBanner__container"}>
          <div className={"investmentBanner__card"}>
            <p>Custo da carteira</p>
            <div className={"investmentBanner__results"}>
              <p>R$</p>
              <p className={"investmentBanner__currentValue"}>{cost.toFixed(2)}</p>
            </div>
          </div>
          <div className={"investmentBanner__card"}>
            <p>Lucro/Prejuízo da carteira</p>
            <div className={"investmentBanner__results"}>
              <p>R$</p>
              <p className={"investmentBanner__currentValue"}>{result.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

InvestmentBanner.propTypes = {
  investment:PropTypes.object
}

export default InvestmentBanner