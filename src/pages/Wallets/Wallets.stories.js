import React from 'react';

import Wallets from './Wallets';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'PAGE/Wallets',
  component: Wallets
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Wallets {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};