import React from "react"
import Chart from "react-apexcharts";
import PropTypes from "prop-types"

import "./radialChart.scss"

const RadialChart = ({percentage,sizeChart}) => {
  const optionsRadial = {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        colors:"#00000000",
        hollow: {
          margin: 0,
          size: "65%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 3,
            opacity: 0.24
          }
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          colors:"#000",
          dropShadow: {
            enabled: true,
            top: -2,
            left: 0,
            blur: 3,
            opacity: 0.35
          }
        },

        dataLabels: {
          showOn: "always",
          name: {
            offsetY: 15,
            show: true,
            color: "#888",
            fontSize: "0.9rem"
          },
          value: {
            offsetY: -20,
            formatter: function (val) {
              return val + "%";
            },
            color: "#888",
            fontSize: "1.5rem",
            fontWeight:800,
            show: true
          }
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#02C9A8'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },

    labels: ["Carteira"]
}
const seriesRadial= [percentage]
        
    return(
      <div className="radialChart">
          <Chart
          options={optionsRadial}
          series={seriesRadial}
          type="radialBar"
          height={sizeChart}
          />
      </div>
    )
}

RadialChart.propTypes={
  percentage:PropTypes.number,
  sizeChart:PropTypes.string
}


export default RadialChart