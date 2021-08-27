import React from 'react'

import TreemapChart from './TreemapChart'
import {modifyTest} from "../../../TestData/createDataAssets"

const assetsTreemap = modifyTest()
const treemapChart = [{
  name:assetsTreemap.assets.stocks.totalEquity.name,
  data:[]
}]

assetsTreemap.assets.stocks.rows.forEach((rows)=>{
    const dataAsset = {
    x:rows.code,
    y:rows.amount
  }
  treemapChart[0].data.push(dataAsset)
})

export default {
  title: 'ATOM/TreemapChart',
  component: TreemapChart,
}

const Template = (args) => <TreemapChart {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sizeChart:"300",
  dataChart:treemapChart
}
