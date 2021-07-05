import React from 'react';
import ItemWallet from './ItemWallet';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ItemWallet',
  component: ItemWallet,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ItemWallet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  infWallets: {
		  name: "CARTEIRAS SISTEMAS",
      wallets:[{
          percentage:100, 
          name:"CEI"}]
  },
  isSelect:"CEI",
  handleSelectWallet:()=>{}
};