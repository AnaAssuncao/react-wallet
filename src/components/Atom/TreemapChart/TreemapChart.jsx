import React from "react"
import Chart from "react-apexcharts";
import PropTypes from "prop-types"
import {numberToCurrenty} from "../../../utils/convertData"

import "./treemapChart.scss"

const TreemapChart = ({sizeChart,dataChart}) => {
  const options = {
    legend: {
      show: true,
      fontSize:  "12px",
      color:  "#0a3c5d",
      offsetY: 8,
    },
    chart: {
      toolbar: {
        show: false
      },
      height: 350,
      type: "treemap",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "16px",
      }
    },
    yaxis:{
      labels: {
        show: true,
        formatter: function(value) {
          return numberToCurrenty(value)
        }
      }
    }
  }

  const series=dataChart
    return(
      <div className="treemap-chart">
          <Chart
            options={options}
            series={series}
            type="treemap"
            height={sizeChart}
          />
      </div>  
    )
}

TreemapChart.propTypes={
  dataChart:PropTypes.array,
  sizeChart:PropTypes.string
}


export default TreemapChart