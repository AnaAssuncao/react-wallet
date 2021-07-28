import {useState }from 'react'
import PropTypes from 'prop-types'

import './investmentCard.scss'
import {HeaderInvestmentCard} from '../HeaderInvestmentCard'
import {InvestmentTable} from "../../Atom/InvestmentTable"

const InvestmentCard = ({investment, getInfAssets}) => {
  const [isDisplayTable, setDisplayTable] = useState(false)

  const handleDisplayTable =()=>{
    const isDisplay = isDisplayTable===true?false:true
    setDisplayTable(isDisplay)
  }

  const {rows,columns} = getInfAssets()
  return (
    <div className="investmentCard">
      <HeaderInvestmentCard investment={investment} handleDisplayTable={handleDisplayTable} isDisplayTable={isDisplayTable}></HeaderInvestmentCard>
      {isDisplayTable?
        <InvestmentTable columns={columns} rows={rows} >{isDisplayTable}</InvestmentTable>
        :null
      }
    </div>
  )
}

InvestmentCard.propTypes = {
    investment:PropTypes.object,
    getInfAssets:PropTypes.func
}

export default InvestmentCard