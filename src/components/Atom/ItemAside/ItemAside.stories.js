import React from 'react';
import ItemAside from './ItemAside';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ItemAside',
  component: ItemAside,
  argTypes: { onClick: { action: 'clicked' } }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ItemAside {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:<p className="itemAside__name">CEI</p>,
  classSelect:"itemAside__select",
  handleItemAside:()=>{}
}