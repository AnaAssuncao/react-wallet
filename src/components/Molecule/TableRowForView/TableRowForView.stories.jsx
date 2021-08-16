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
    category:"Ações",
    code:"ITUB",
    headerName:"Itaú",
    percentEquity:0.05
  },
  handleValuePercentage:()=>{}
}
