import React from 'react'

import Loading from './Loading'

export default {
  title: 'ATOM/Loading',
  component: Loading,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template = (args) =><div style={{width:"5rem"}}> <Loading {...args} /> </div>

export const Primary = Template.bind({})

