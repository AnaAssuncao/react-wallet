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
      <div className="cards-investment">
          <div className="cards-investment__result">
            <div className="cards-investment__item" >
              <div>
                <p className="cards-investment__value">{result}</p>
                <p className="cards-investment__percent">{percentResult}%</p>
              </div>
              <p className="cards-investment__legend"> Lucro Bruto</p>
            </div>
          </div>

          <div className="cards-investment__total">
            <div className="cards-investment__item" >
              <p  className="cards-investment__value cards-investment__value--main">{amount}</p>
              <p className="cards-investment__legend cards-investment__legend--main">Total Patrimônio Carteira</p>
              </div>
          </div>

          <div className="cards-investment__cost">
            <div className="cards-investment__item" >
              <p className="cards-investment__value">{cost}</p>
              <p className="cards-investment__legend">Investimento</p>
            </div>
          </div>
      </div>
  )
}

CardsInvestment.propTypes = {
  investment:PropTypes.object
}

export default CardsInvestment