import React from 'react'
import ContainerTitleEditable from './ContainerTitleEditable'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/ContainerTitleEditable',
  component: ContainerTitleEditable
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContainerTitleEditable {...args} />

export const Primary = Template.bind({})
Primary.args = {
  nameInput:"Nome da Carteira",
  defaultValuesWallet:{    
    totalEquity:{
      category:"customWallets",
      name:"Não Classificados",
      percentEquity:0.80
  }
},
  handleHeaderChanges:()=>{}
}