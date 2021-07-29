import React from 'react'
import PropTypes from 'prop-types'
import {numberToCurrenty} from "../../../utils/convertData"
import './cardsInvestment.scss'

const CardsInvestment = ({investment}) => 
{
  let {amount,cost, result,percentResult} = investment
  amount = numberToCurrenty(amount)
  cost = numberToCurrenty(cost)
  result = numberToCurrenty(result)

    return (
      <div className="cardsInvestment">
          <div className="cardsInvestment__result">
            <div className="cardsInvestment__item" >
              <div>
                <p className="cardsInvestment__value">{result}</p>
                <p className="cardsInvestment__percent">{percentResult}%</p>
              </div>
              <p className="cardsInvestment__legend"> Lucro Bruto</p>
            </div>
          </div>

          <div className="cardsInvestment__total">
            <div className="cardsInvestment__item" >
              <p  className="cardsInvestment__value cardsInvestment__value--main">{amount}</p>
              <p className="cardsInvestment__legend cardsInvestment__legend--main">Total Patrimônio Carteira</p>
              </div>
          </div>

          <div className="cardsInvestment__cost">
            <div className="cardsInvestment__item" >
              <p className="cardsInvestment__value">{cost}</p>
              <p className="cardsInvestment__legend">Investimento</p>
            </div>
          </div>
      </div>
  )
}

CardsInvestment.propTypes = {
  investment:PropTypes.object
}

export default CardsInvestment