import React from 'react';

import InvestmentCard from './InvestmentCard';
import data from "../../../TestData/assets-DataTest.json"

export default {
  title: 'MOLECULE/InvestmentCard',
  component: InvestmentCard,
};

const Template = (args) => <InvestmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:data.directTreasure
}