import { useState } from "react";

import RangeSlider from "./RangeSlider";

export default {
  title: "ATOM/RangeSlider",
  component: RangeSlider,
}

const ComponentFather = ({...args})=>{
  const [arrayValues, setArrayValues] = useState([1,22])
  const handletArrayValues=(newValue)=>{
    setArrayValues(newValue)
  }
  return(
    <RangeSlider startingYear={2018} initialValues= {[1,32]}
          handleValuesSlider={handletArrayValues} arrayValues={arrayValues} {...args} />
  )
}

const Template = (args) => <ComponentFather {...args}/>

export const Primary = Template.bind({});