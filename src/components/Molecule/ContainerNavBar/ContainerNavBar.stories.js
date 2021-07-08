import React from 'react'
import ContainerNavBar from './ContainerNavBar'

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
        value:"equity"
    },{
        description:"Rentabilidade",
        value:"profitability"
    },{
        description:"Proventos",
        value:"earnings"
    }
  ],
  selectNavigation: "equity",
  handleSelectNavigations:()=>{}
}