import React from "react"

import AlertToConfirm from "./AlertToConfirm"

export default {
  title: "ATOM/AlertToConfirm",
  component: AlertToConfirm,
  argTypes: { onClick: { action: "clicked" } }
}

const Template = (args) => <AlertToConfirm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  messageCode:"noSaveWallet",
  handleAlert:()=>{}
}
