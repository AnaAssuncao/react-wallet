import React from 'react';
import InvestmentTable from './InvestmentTable';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/InvestmentTable',
  component: InvestmentTable,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <InvestmentTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns:[
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' } ],
  
  rows:[
    {id: 0, title: 'row1', count: 20}, 
    {id: 1, title: 'row1', count: 40}, 
    {id: 2, title: 'row1', count: 60}]
}