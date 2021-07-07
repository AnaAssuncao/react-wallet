import React from 'react'
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types'

import './investmentTable.scss'

const InvestmentTable = ({columns,rows}) =>{
    return (   
        <div className="investmentTable">
            <ReactDataGrid
                columns={columns}
                rows={rows}
                rowGetter={i => rows[i]}
                rowsCount={rows.length}
                className="investmentTable"
                />
        </div>
    )
}

InvestmentTable.propTypes={
    columns:PropTypes.object,
    rows:PropTypes.object
}

export default InvestmentTable

