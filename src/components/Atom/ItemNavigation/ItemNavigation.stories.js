import React from 'react';
import ItemNavigation from './ItemNavigation';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ItemNavigation',
  component: ItemNavigation,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ItemNavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  classSelect:"itemNavigation__item__select", 
  name:"CEI",
  handleSelectNavigations:()=>{}
};