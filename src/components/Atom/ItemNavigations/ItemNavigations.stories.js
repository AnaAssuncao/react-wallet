import React from 'react';
import ItemNavigations from './ItemNavigations';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ItemNavigations',
  component: ItemNavigations,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ItemNavigations {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  arrayNamesNavigations:[ "Patrimônio","Rentabilidade","Proventos"],
  selectNavigation:"Patrimônio",
  handleSelectNavigations:()=>{}
};