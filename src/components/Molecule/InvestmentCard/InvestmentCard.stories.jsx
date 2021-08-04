import React from 'react';

import InvestmentCard from './InvestmentCard';
import assetsTabela from "../../../TestData/tableAssets-DataTest.json"

export default {
  title: 'MOLECULE/InvestmentCard',
  component: InvestmentCard,
};

const Template = (args) => <InvestmentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  investment:assetsTabela.assets.stocks.totalEquity,
  nameAsset:"stocks",
  getDataTable:(nameAssets)=>{
    const tableData = {
        columns:assetsTabela.assets[nameAssets].columns,
        rows:assetsTabela.assets[nameAssets].rows
    }
    return tableData
}

}