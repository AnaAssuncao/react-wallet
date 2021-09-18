import React from 'react';

import WalletEarnings from './WalletEarnings';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/WalletEarnings',
  component: WalletEarnings
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <WalletEarnings {...args} />;

export const Primary = Template.bind({});