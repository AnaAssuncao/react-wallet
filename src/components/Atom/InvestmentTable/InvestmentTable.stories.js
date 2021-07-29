import React from 'react';
import InvestmentTable from './InvestmentTable';
import assets from "../../../TestData/tableAssets-DataTest.json"
import {numberToCurrenty} from "../../../utils/convertData"

assets.stocks.rows.forEach((asset)=>{
  asset.amount = numberToCurrenty(asset.amount)
  asset.cost = numberToCurrenty(asset.cost)
  asset.result = numberToCurrenty(asset.result)
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
  columns:assets.stocks.columns,
  
  rows:assets.stocks.rows
}