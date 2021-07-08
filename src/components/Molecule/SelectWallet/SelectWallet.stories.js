import React from 'react'

import SelectWallet from './SelectWallet'
import data from "../../../TestData/wallets.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/SelectWallet',
  component: SelectWallet,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SelectWallet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  infWallets:data.walletByBrokers,
  select:data.walletByBrokers.wallets[0].value,
  handleSelectWallet:()=>{}
};