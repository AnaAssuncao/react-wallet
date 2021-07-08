import PropTypes from 'prop-types'

import './headerInvestmentCard.scss'
import vector from "../../../img/Vector.svg"

const HeaderInvestmentCard = ({investment,handleDisplayTable}) => {
  const {percentage, name,cost,result,amount} = investment
  return (
    <div className="headerInvestmentCard">
      <p >{percentage}%</p>

      <p className="headerInvestmentCard__name">{name}</p>

      <div className={"headerInvestmentCard__container"}>
        <div className={"headerInvestmentCard__card"}>
          <p>Custo</p>
          <div className={"headerInvestmentCard__results"}>
            <p>R$</p>
            <p className={"headerInvestmentCard__currentValue"}>{cost.toFixed(2)}</p>
          </div>
        </div>
        <div className={"headerInvestmentCard__card"}>
          <p>Lucro/Prejuízo</p>
          <div className={"headerInvestmentCard__results"}>
            <p>R$</p>
            <p className={"headerInvestmentCard__currentValue"}>{result.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className={"headerInvestmentCard__total"}>
        <p >Valor Total</p>
        <p className={"headerInvestmentCard__total__value"}> R$ {amount.toFixed(2)} </p>
      </div>

      <button type="button" className={"headerInvestmentCard__button"} onClick={()=>handleDisplayTable()}>
        <img src={vector} alt="Seta"></img>
      </button>

    </div>
  )
}

HeaderInvestmentCard.propTypes = {
    investment:PropTypes.object,
    handleDisplayTable:PropTypes.func,
}

export default HeaderInvestmentCard