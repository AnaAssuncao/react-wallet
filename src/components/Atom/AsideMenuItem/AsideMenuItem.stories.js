import React from 'react';
import AsideMenuItem from './AsideMenuItem';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/AsideMenuItem',
  component: AsideMenuItem,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <AsideMenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:<p className="asideMenuItem__name">CEI</p>,
  classSelect:"asideMenuItem__select",
  handleItemAside:()=>{}
}