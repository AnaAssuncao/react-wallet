import React from 'react';
import NavigationBar from './NavigationBar';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'MOLECULE/NavigationBar',
  component: NavigationBar,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <NavigationBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  arrayNamesNavigations:[ "Patrimônio","Rentabilidade","Proventos"],
  selectNavigation:"Patrimônio",
  handleSelectNavigations:()=>{}
};