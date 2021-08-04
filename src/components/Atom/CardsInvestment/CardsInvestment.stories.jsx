import React from 'react';

import CardsInvestment from './CardsInvestment';
import assets from "../../../TestData/tableAssets-DataTest.json"

export default {
  title: 'ATOM/CardsInvestment',
  component: CardsInvestment,
};

const Template = (args) => <CardsInvestment {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:assets.totalEquity
}