import React from 'react';

import MainButton from './MainButton';

export default {
  title: 'ATOM/MainButton',
  component: MainButton,
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <MainButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: <p>Deletar</p>,
};
