import React from 'react'

import RadialChart from './RadialChart'

export default {
  title: 'ATOM/RadialChart',
  component: RadialChart,
}

const Template = (args) => <RadialChart {...args} />

export const Primary = Template.bind({})
Primary.args = {
  percentage:15,
  sizeChart:"100%"
}
