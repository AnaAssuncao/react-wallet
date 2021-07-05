import React from 'react';

import Header from './Header';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'ORGANISM/Header',
  component: Header
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});

