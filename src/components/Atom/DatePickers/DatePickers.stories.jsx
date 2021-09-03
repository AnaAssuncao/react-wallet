import React from "react"

import DatePickers from "./DatePickers"

export default {
  title: "ATOM/DatePickers",
  component: DatePickers,
}

const Template = (args) => <DatePickers {...args} />

export const Primary = Template.bind({})
Primary.args = {
  labelName:"Data Inicial",
  dateValue:"2019-03-25", 
  handleDateValue:()=>{}
}

