import React from 'react'
import HeaderMenuItem from './HeaderMenuItem'
import transactionsIcon from "../../../img/transactions_icon.svg"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/HeaderMenuItem',
  component: HeaderMenuItem,
  argTypes: { onClick: { action: 'clicked' } }
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <HeaderMenuItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name:"NEGOCIAÇÕES",
  value:"negotiations", 
  srcImg:transactionsIcon, 
  extraClass:"",
}