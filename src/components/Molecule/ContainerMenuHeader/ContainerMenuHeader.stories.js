import React from 'react'
import ContainerMenuHeader from './ContainerMenuHeader'
import walletIcon from "../../../img/wallet_icon.svg"
import transactionsIcon from "../../../img/transactions_icon.svg"
import calcIcon from "../../../img/calc_icon.svg"
import newsIcon from "../../../img/news_icon.svg"
import chartIcon from "../../../img/chart_icon.svg"

const arrayListMenu =[
    {name:"CARTEIRAS",value:"wallet", srcImg:walletIcon},
    {name:"NEGOCIAÇÕES",value:"negotiations", srcImg:transactionsIcon},
    {name:"INFO. TRIBUTOS",value:"taxes", srcImg:calcIcon},
    {name:"NOTÍCIAS",value:"news", srcImg:newsIcon},
    {name:"INDICADORES",value:"indicators", srcImg:chartIcon}]       

export default {
  title: 'MOLECULE/ContainerMenuHeader',
  component: ContainerMenuHeader,
  argTypes: { onClick: { action: 'clicked' } }
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContainerMenuHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
    arrayListMenu:arrayListMenu
}