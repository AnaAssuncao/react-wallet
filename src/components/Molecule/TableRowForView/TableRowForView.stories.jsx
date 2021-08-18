import React from "react";

import TableRowForView from "./TableRowForView";

export default {
  title: "MOLECULE/TableRowForView",
  component: TableRowForView,
}

const Template = (args) => <TableRowForView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tableRowData:{
    nameCategory:"Ações",
    code:"ITUB",
    name:"Itaú",
    percentWallet:0.05
  },
  handleValuePercentage:()=>{},
  handleDeleteRow:()=>{}
}
