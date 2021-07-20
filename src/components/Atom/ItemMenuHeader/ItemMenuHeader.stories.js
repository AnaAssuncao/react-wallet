import React from 'react';
import ItemMenuHeader from './ItemMenuHeader';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ItemMenuHeader',
  component: ItemMenuHeader,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ItemMenuHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  classSelect:"ItemMenuHeader__item__select", 
  name:"Patrimônio",
  value:"equity",
  handleSelectNavigations:()=>{}
};