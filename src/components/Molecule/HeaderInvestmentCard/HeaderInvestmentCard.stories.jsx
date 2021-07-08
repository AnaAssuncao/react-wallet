import React from 'react';

import HeaderInvestmentCard from './HeaderInvestmentCard';
import data from "../../../TestData/investmentCards.json"

export default {
  title: 'MOLECULE/HeaderInvestmentCard',
  component: HeaderInvestmentCard,
};

const Template = (args) => <HeaderInvestmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:data.directTreasure
}