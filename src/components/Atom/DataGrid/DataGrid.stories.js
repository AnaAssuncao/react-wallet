import React from 'react';
import DataGrid from './DataGrid';
import {numberToCurrenty} from "../../../utils/convertData"
import {modifyTest} from "../../../TestData/createDataAssets"

const assetsTabela = modifyTest()

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
  title: 'ATOM/DataGrid',
  component: DataGrid,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DataGrid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns:assetsTabela.assets.stocks.columns,
  rows:chancedRows
}