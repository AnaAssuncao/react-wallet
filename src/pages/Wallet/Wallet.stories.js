import React from 'react';

import Wallet from './Wallet';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'PAGE/Wallet',
  component: Wallet
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Wallet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};