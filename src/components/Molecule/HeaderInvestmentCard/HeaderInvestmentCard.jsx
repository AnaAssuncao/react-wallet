import React from "react"
import PropTypes from "prop-types"
import {numberToCurrenty} from "../../../utils/convertData"
import {RadialChart} from "../../Atom/RadialChart"

import "./headerInvestmentCard.scss"
import displayTable from "../../../img/open_icon.svg"
import noDisplayTable from "../../../img/closed_icon.svg"

const HeaderInvestmentCard = ({investment,isDisplayTable,handleDisplayTable}) => {
  let {name,cost,result,amount,percentage,percentResult} = investment
  amount = numberToCurrenty(amount)
  cost = numberToCurrenty(cost)
  result = numberToCurrenty(result)

  return (
    <div className="header-investment-card">
      <div className="header-investment-card__right">
          <p className="header-investment-card__name">{name}</p>
          <p className="header-investment-card__value">Patrimônio: {amount}</p>
      </div>

      <RadialChart percentage={percentage} sizeChart={"100%"}></RadialChart>

      <div className="header-investment-card__left">
        <div className="header-investment-card__container">
          <span className="header-investment-card__value">Lucro: {result}</span>
          <span className="header-investment-card__porcentage">({percentResult}%)</span>
        </div>
          <span className="header-investment-card__value">Investimento: {cost}</span>
      </div>
    

      <button type="button" className={"header-investment-card__button"} onClick={()=>handleDisplayTable()}>
        {isDisplayTable?
          <img className={"header-investment-card__icon"}src={displayTable} alt="Seta"></img>
          :
          <img className={"header-investment-card__icon"}src={noDisplayTable} alt="Seta"></img>
        }
  
      </button>

    </div>
  )
}

HeaderInvestmentCard.propTypes = {
    investment:PropTypes.object,
    isDisplayTable:PropTypes.bool,
    handleDisplayTable:PropTypes.func,
}

export default HeaderInvestmentCard