import React from 'react'

import TreemapChart from './TreemapChart'

import  {getDataTreemap } from "../../Organism/WalletEquity/getDataAssets"

const dataTreemap= getDataTreemap()

export default {
  title: 'ATOM/TreemapChart',
  component: TreemapChart,
}

const Template = (args) => <TreemapChart {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sizeChart:"300",
  dataChart:dataTreemap
}
