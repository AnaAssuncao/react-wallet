
import PropTypes from "prop-types"
import "./totalWallet.scss"

const TotalWallet = ({total}) => {
  if(total===1){
    return (
    <div className="total-wallet total-wallet--margin">
        <div className="total-wallet__container">
            <span className="total-wallet__text">TOTAL GERAL</span>
            <span className="total-wallet__value">{(total*100).toFixed()} %</span>
        </div>
    </div>
    )
  }
  return(
    <div className="total-wallet">
        <div className="total-wallet__container">
            <span className="total-wallet__text total-wallet__text--red">TOTAL GERAL</span>
            <span className="total-wallet__value total-wallet__text--red">{(total*100).toFixed()} %</span>
        </div>
        {total>1 &&
          <p className="total-wallet__alert">Valor acima de 100%</p>}
        {total>=0 && total<1 &&
          <p className="total-wallet__alert">Complete até 100%</p>}
  </div>
  )
}

TotalWallet.propTypes = {
  total: PropTypes.number
}

export default TotalWallet