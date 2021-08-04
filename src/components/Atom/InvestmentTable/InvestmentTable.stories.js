import React from 'react';
import InvestmentTable from './InvestmentTable';
import {numberToCurrenty} from "../../../utils/convertData"
import assetsTabela from "../../../TestData/tableAssets-DataTest.json"

const chancedRows =[]
assetsTabela.assets.stocks.rows.forEach((asset,ind)=>{
     chancedRows[ind]=Object.assign({}, asset)
     chancedRows[ind].amount = numberToCurrenty(asset.amount)
     chancedRows[ind].cost = numberToCurrenty(asset.cost)
     chancedRows[ind].result = numberToCurrenty(asset.result)
     chancedRows[ind].percentage = (asset.percentage * 100).toFixed() + "%"
})

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/InvestmentTable',
  component: InvestmentTable,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <InvestmentTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns:assetsTabela.assets.stocks.columns,
  
  rows:chancedRows
}