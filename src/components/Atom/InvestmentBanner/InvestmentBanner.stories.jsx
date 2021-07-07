import React from 'react';

import InvestmentBanner from './InvestmentBanner';
import data from "../../../TestData/investmentCards.json"

export default {
  title: 'ATOM/InvestmentBanner',
  component: InvestmentBanner,
};

const Template = (args) => <InvestmentBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:data.totalEquity
}