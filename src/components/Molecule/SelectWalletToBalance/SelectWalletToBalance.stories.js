import React from 'react'

import SelectWalletToBalance from './SelectWalletToBalance'
import summaryWallet from "../../../TestData/wallets-DataTest.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/SelectWalletToBalance',
  component: SelectWalletToBalance,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SelectWalletToBalance {...args} />;
 
export const Primary = Template.bind({});
const listBalanceWallets = Object.keys(summaryWallet.balanceWallets)

Primary.args = {
  summaryWallet:summaryWallet,
  listWallets:listBalanceWallets,
  selectCode:listBalanceWallets[0],
  handleSelectCodeWallet :()=>{}
}