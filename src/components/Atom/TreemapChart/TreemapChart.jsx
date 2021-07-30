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
      color:  "#0a3c5d"
    },
    chart: {
      height: 350,
      type: "treemap",
    },
    title: {
      text: "Patrimônio",
      align: "center",
      offsetY: 20,
      style: {
        fontSize:  "1.5rem",
        fontWeight:  "bold",
        color:  "#0a3c5d"
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "16px",
      },
      offsetY: -4
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
      <div className="treemapChart">
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