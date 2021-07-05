import React from 'react';

import PatrimonyWallet from './PatrimonyWallet';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/PatrimonyWallet',
  component: PatrimonyWallet
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <PatrimonyWallet {...args} />;

export const Primary = Template.bind({});