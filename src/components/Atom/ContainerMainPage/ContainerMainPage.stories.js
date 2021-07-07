import React from 'react';

import ContainerMainPage from './ContainerMainPage';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ATOM/ContainerMainPage',
  component: ContainerMainPage
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ContainerMainPage {...args} />;

export const Primary = Template.bind({});
