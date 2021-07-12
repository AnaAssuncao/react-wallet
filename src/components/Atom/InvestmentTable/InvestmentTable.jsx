import React,{Suspense} from 'react'
import PropTypes from 'prop-types'

import {Loading} from '../Loading'
import './investmentTable.scss'

const ReactDataGrid = React.lazy(() => import('react-data-grid'));

const InvestmentTable = ({columns,rows}) =>{
     const heigthTable = ((rows.length+1)*35+5)
    return (   
        <div className="investmentTable">
            <Suspense fallback={<Loading/>}>
                <ReactDataGrid
                        style={{height: heigthTable + "px", maxHeight: "350px"}}
                        columns={columns}
                        rows={rows}
                        rowGetter={i => rows[i]}
                        rowsCount={rows.length}
                        className="rdg-light investmentTable__container"
                        />
            </Suspense>
        </div>
    )
}

InvestmentTable.propTypes={
    columns:PropTypes.array,
    rows:PropTypes.array
}

export default InvestmentTable