import React from 'react';

import ModalAlert from './ModalAlert';

export default {
  title: 'ATOM/ModalAlert',
  component: ModalAlert,
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <ModalAlert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  messageCode:"saveWallet",
  children:<p>Salvar</p>,
  propsButton:{color:"save", size:"large", variant:"contained", fontSize:"1.1rem"},
  confirmModal:()=>{}
};
