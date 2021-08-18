import React from "react"
import AutocompleteInput from "./AutocompleteInput"

export default {
  title: "ATOM/AutocompleteInput",
  component: AutocompleteInput,
  argTypes: { onClick: { action: "clicked" } }
}

const Template = (args) => <AutocompleteInput {...args} />

export const Primary = Template.bind({})
Primary.args={
  style:{width:"10rem"},
  nameLabel:"Código",
  dataInput:[
    { title: "RRRP3" },
  { title: "QVQP3B" },
  { title: "TAERI3" },
  { title: "AESB3" },
  { title: "TIET11" },
  { title: "TIET3"},
  { title: "TIET4" },
  { title: "AFLT3" },
  { title: "RPAD3" },
  { title: "RPAD5"}
  ],
  handleAutocomplete:(newValue)=>{console.log(newValue)}
}

