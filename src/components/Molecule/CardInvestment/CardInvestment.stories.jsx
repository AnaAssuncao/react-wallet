import React from 'react';

import CardInvestment from './CardInvestment';

export default {
  title: 'MOLECULE/CardInvestment',
  component: CardInvestment,
};

const Template = (args) => <CardInvestment {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  percenyageInvestment:50,
   nameInvestment:"Tesouro Direto",
   costInvestment:10000,
   resultInvestment:1000,
   valueInvestment:11000
};