import React from 'react';

import HeaderInvestmentCard from './HeaderInvestmentCard';
import assets from "../../../TestData/tableAssets-DataTest.json"

export default {
  title: 'MOLECULE/HeaderInvestmentCard',
  component: HeaderInvestmentCard,
};

const Template = (args) => <HeaderInvestmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:assets.directTreasure.total,
  handleDisplayTable:()=>{}
}