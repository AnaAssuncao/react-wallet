import React from 'react'

import SelectWallet from './SelectWallet'
import summaryWallet from "../../../TestData/wallets-DataTest.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/SelectWallet',
  component: SelectWallet,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SelectWallet {...args} />;
 
export const Primary = Template.bind({});
const arrayCodeWallets =  Object.keys(summaryWallet.wallets) 
const listWallets = arrayCodeWallets.filter((wallet)=> summaryWallet.wallets[wallet].category==="brokersWallets")

Primary.args = {
  summaryWallet:summaryWallet,
  nameCategory:"brokersWallets",
  listWallets:listWallets,
  selectCode:listWallets[0],
  handleSelectCodeWallet :()=>{}
}