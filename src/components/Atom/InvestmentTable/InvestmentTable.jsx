import React,{Suspense} from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import './themeTable.css'
// import 'ag-grid-community/dist/styles/ag-theme-material.css'
import PropTypes from 'prop-types'

import {Loading} from '../Loading'
import './investmentTable.scss'

const InvestmentTable = ({columns,rows}) =>{
  const heigthTable ={
    row:35,
    header:35,
    max:350,
  }
  const totalRows = ((rows.length)*heigthTable.row+heigthTable.header+1)
  const heightSize = totalRows<heigthTable.max?totalRows:heigthTable.max

    return (   
        <div className="investment-table" >
            <Suspense fallback={<Loading/>}>
            <div className="ag-theme-material" style={{height:heightSize, width: "100%"}}>
              <AgGridReact
                    defaultColDef={{
                        flex: 1,
                        sortable: true,
                        resizable: true
                    }} 
                    enableCellTextSelection={true}
                    ensureDomOrder={true}
                    // rowMultiSelectWithClick={true}
                    rowSelection={'multiple'}
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