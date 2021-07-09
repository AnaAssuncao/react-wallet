import React from 'react'

import Loading from './Loading'

export default {
  title: 'ATOM/Loading',
  component: Loading,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template = (args) => <Loading {...args} />

export const Primary = Template.bind({})

