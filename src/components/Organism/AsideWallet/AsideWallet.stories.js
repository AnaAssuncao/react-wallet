import React from 'react';

import AsideWallet from './AsideWallet';
import data from "../../../TestData/wallets.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/AsideWallet',
  component: AsideWallet
};

//👇 We create a “template” of how args map to rendering
const Template = (data) => <AsideWallet {...data} />;

export const Primary = Template.bind({});
Primary.args = {
  dataSistemWallet: data.sistemWallet,
  dataWalletByBrokers:data.walletByBrokers,
  dataPersonalizedWallet:data.personalizedWallet,
  selectWallet:"CEI"
};
