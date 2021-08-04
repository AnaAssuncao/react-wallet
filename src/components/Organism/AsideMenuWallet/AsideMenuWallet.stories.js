import React from 'react';

import AsideMenuWallet from './AsideMenuWallet';
import summaryWallet from "../../../TestData/wallets-DataTest.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/AsideMenuWallet',
  component: AsideMenuWallet
};

//👇 We create a “template” of how args map to rendering
const Template = (data) => <AsideMenuWallet {...data} />;

export const Primary = Template.bind({});
Primary.args = {
  summaryWallet:summaryWallet,
  selectCodeWallet:summaryWallet.defaultWallet,
  handleSelectCodeWallet:()=>{}
}
