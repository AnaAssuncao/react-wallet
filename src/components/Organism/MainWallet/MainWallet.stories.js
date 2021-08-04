import React from 'react';

import MainWallet from './MainWallet';
import summaryWallet from "../../../TestData/wallets-DataTest.json"

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/MainWallet',
  component: MainWallet
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MainWallet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  summaryWallet: summaryWallet,
  selectCodeWallet:summaryWallet.defaultWallet
};