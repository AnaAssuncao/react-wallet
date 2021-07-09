import React from 'react';

import WalletEquity from './WalletEquity';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/WalletEquity',
  component: WalletEquity
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <WalletEquity {...args} />;

export const Primary = Template.bind({});