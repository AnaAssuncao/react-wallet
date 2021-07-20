import React from 'react';

import InvestmentCard from './InvestmentCard';
import assets from "../../../TestData/tableAssets-DataTest.json"

export default {
  title: 'MOLECULE/InvestmentCard',
  component: InvestmentCard,
};

const Template = (args) => <InvestmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:assets.directTreasure.total,
  getInfAssets:()=>{return assets.directTreasure}
}