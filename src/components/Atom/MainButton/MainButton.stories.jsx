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
  color:"delete",
  children: <p>Deletar</p>,
};

export const Secundary = Template.bind({});
Secundary.args = {
  color:"save",
  children: <p>Salvar</p>,
};

export const Tertiar= Template.bind({});
Tertiar.args = {
  color:"cancel",
  children: <p>Cancelar</p>,
};
