import React from 'react'
import {Suspense} from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import PropTypes from 'prop-types'

import {Loading} from '../Loading'
import './investmentTable.scss'

const InvestmentTable = ({columns,rows}) =>{
  const heigthTable ={
    row:35,
    header:25,
    max:350,
  }

  const totalRows = ((rows.length)*heigthTable.row+heigthTable.header+1)
  const heightSize = totalRows<heigthTable.max?totalRows:heigthTable.max

    return (   
        <div className="investmentTable" >
            <Suspense fallback={<Loading/>}>
            <div className="ag-theme-balham" style={{height:heightSize, width: "62rem"}}>
              <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        minWidth: 100,
                        sortable: true,
                        resizable: true
                    }} 
                    accentedSort={true}
                    sortingOrder={['desc', 'asc', null]}
                    animateRows={true}
                    headerHeight={heigthTable.header}
                    rowHeight={heigthTable.row}
                    rowData={rows}
                    columnDefs={columns}
                  >
              </AgGridReact>
            </div>
            </Suspense>
        </div>
    )
}

InvestmentTable.propTypes={
    columns:PropTypes.array,
    rows:PropTypes.array
}

export default InvestmentTable