import React from "react"

import CounterPercentage from "./CounterPercentage"

export default {
  title: "ATOM/CounterPercentage",
  component: CounterPercentage,
}

const Template = (args) => <CounterPercentage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  valuePercent:0.50,
  colorButton:"dark",
  maxLength:3,
  width:"10rem",
  handleValuePercentage:()=>{}
}

