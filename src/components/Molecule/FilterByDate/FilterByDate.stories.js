import React from 'react'

import FilterByDate from './FilterByDate'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/FilterByDate',
  component: FilterByDate,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FilterByDate {...args} />
 
export const Primary = Template.bind({})
Primary.args = {
  startDate: "2018-05-03",
  endDate:"2021-08-31",
}