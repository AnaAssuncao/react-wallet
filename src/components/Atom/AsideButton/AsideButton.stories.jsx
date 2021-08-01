import React from 'react';

import AsideButton from './AsideButton';

export default {
  title: 'ATOM/AsideButton',
  component: AsideButton,
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <AsideButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: <p>Nova Carteira</p>,
};
