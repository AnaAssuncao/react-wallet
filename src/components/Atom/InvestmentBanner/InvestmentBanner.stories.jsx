import React from 'react';

import InvestmentBanner from './InvestmentBanner';

export default {
  title: 'ATOM/InvestmentBanner',
  component: InvestmentBanner,
};

const Template = (args) => <InvestmentBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  amountTotal:100.000,
  costTotalInvestment:90.000,
  resultTotalInvestment:10.000
};