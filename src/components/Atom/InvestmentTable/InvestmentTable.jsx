import React from 'react'
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types'

import './investmentTable.scss'

const InvestmentTable = ({columns,rows}) =>{
     const heigthTable = ((rows.length+1)*35+5)
    return (   
        <div className="investmentTable">
            <ReactDataGrid
                style={{height: heigthTable + "px", maxHeight: "350px"}}
                columns={columns}
                rows={rows}
                rowGetter={i => rows[i]}
                rowsCount={rows.length}
                className="rdg-light investmentTable__container"
                />
        </div>
    )
}

InvestmentTable.propTypes={
    columns:PropTypes.array,
    rows:PropTypes.array
}

export default InvestmentTable