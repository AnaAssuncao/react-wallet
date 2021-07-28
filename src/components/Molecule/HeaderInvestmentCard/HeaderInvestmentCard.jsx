import React from 'react'
import PropTypes from 'prop-types'

import './headerInvestmentCard.scss'
import displayTable from "../../../img/open_icon.svg"
import noDisplayTable from "../../../img/closed_icon.svg"

const HeaderInvestmentCard = ({investment,isDisplayTable,handleDisplayTable}) => {
  const {name,cost,result,amount,percentResult} = investment

  return (
    <div className="headerInvestmentCard">
      <div className="headerInvestmentCard__right">
          <p className="headerInvestmentCard__name">{name}</p>
          <p className="headerinvestmentcard__value">Patrimônio: {amount}</p>
      </div>


      <div className="headerInvestmentCard__left">
        <div className="headerInvestmentCard__container">
          <p className="headerinvestmentcard__value">Lucro: {result}</p>
          <p className="headerinvestmentcard__porcentage">({percentResult}%)</p>
        </div>
          <p className="headerinvestmentcard__value">Investimento: {cost}</p>
      </div>
    

      <button type="button" className={"headerInvestmentCard__button"} onClick={()=>handleDisplayTable()}>
        {isDisplayTable?
          <img className={"headerInvestmentCard__icon"}src={displayTable} alt="Seta"></img>
          :
          <img className={"headerInvestmentCard__icon"}src={noDisplayTable} alt="Seta"></img>
        }
  
      </button>

    </div>
  )
}

HeaderInvestmentCard.propTypes = {
    investment:PropTypes.object,
    handleDisplayTable:PropTypes.func,
}

export default HeaderInvestmentCard