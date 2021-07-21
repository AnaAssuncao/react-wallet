import React from 'react'
import ContainerNavBar from './ContainerNavBar'
import gold from "../../../img/gold_icon.svg"
import pig from "../../../img/pig_icon.svg"
import chart from "../../../img/chart2_icon.svg"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/ContainerNavBar',
  component: ContainerNavBar,
  argTypes: { onClick: { action: 'clicked' } }
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContainerNavBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  arrayNavigations:[
    {
      description:"Patrimônio",
      value:"equity",
      extraclass:"containerNavBarItem__fist",
      srcImg:gold
  },{
      description:"Rentabilidade",
      value:"profitability",
      extraclass:"",
      srcImg:pig
  },{
      description:"Proventos",
      value:"earnings",
      extraclass:"",
      srcImg:chart
  }
  ],
  selectNavigation: "equity",
  handleSelectNavigations:()=>{}
}