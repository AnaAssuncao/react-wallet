import React from 'react';

import MainWallet from './MainWallet';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/MainWallet',
  component: MainWallet
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MainWallet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  nameWallet: 'CEI',
};