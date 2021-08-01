import React from 'react'
import ContainerNavBarItem from './ContainerNavBarItem'
import gold from "../../../img/gold_icon.svg"
//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ContainerNavBarItem',
  component: ContainerNavBarItem,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContainerNavBarItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  classSelect:"nav-bar-item__item__select", 
  name:"Patrimônio",
  extraclass:"",
  srcImg:gold,
  handleSelectNavigations:()=>{}
}