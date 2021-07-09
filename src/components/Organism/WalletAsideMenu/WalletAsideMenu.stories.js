import React from 'react';

import WalletAsideMenu from './WalletAsideMenu';
import data from "../../../TestData/wallets-DataTest.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/WalletAsideMenu',
  component: WalletAsideMenu
};

//👇 We create a “template” of how args map to rendering
const Template = (data) => <WalletAsideMenu {...data} />;

export const Primary = Template.bind({});
Primary.args = {
  dataSistemWallet: data.sistemWallet,
  dataWalletByBrokers:data.walletByBrokers,
  dataPersonalizedWallet:data.personalizedWallet,
  selectWallet:"CEI"
};
