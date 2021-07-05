import React from 'react';

import ContainerAsidePanel from './ContainerAsidePanel';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/ContainerAsidePanel',
  component: ContainerAsidePanel
};

//👇 We create a “template” of how args map to rendering
const Template = (data) => <ContainerAsidePanel {...data} />;

export const Primary = Template.bind({});

