import React from 'react'

import Logo from './Logo'

export default {
  title: 'ATOM/Logo',
  component: Logo,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template = (args) => <Logo {...args} />

export const Primary = Template.bind({})

