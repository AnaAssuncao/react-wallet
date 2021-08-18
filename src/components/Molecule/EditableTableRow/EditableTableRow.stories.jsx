import React from "react";

import EditableTableRow from "./EditableTableRow";
import { DataAssetsProvider } from "../../../context/dataAssets"

export default {
  title: "MOLECULE/EditableTableRow",
  component: EditableTableRow,
}

const Template = (args) =>     <DataAssetsProvider><EditableTableRow {...args} /></DataAssetsProvider>;

export const Primary = Template.bind({});
Primary.args = {
  handleValuePercentage:()=>{},
  handleDeleteEditableRow:()=>{}
}
