import React from "react"

import InputText from "./InputText"

export default {
  title: "ATOM/InputText",
  component: InputText,
}

const Template = (args) => <InputText {...args} />

export const Primary = Template.bind({})
Primary.args = {
  nameInput:"Nome da Carteira",
  maxLength:15,
  handleInputText:()=>{}
}

