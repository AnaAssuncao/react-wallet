import React from "react";

import TableWalletsToCustomize from "./TableWalletsToCustomize";

//👇 This default export determines where your story goes in the story list
export default {
  title: "ORGANISM/TableWalletsToCustomize",
  component: TableWalletsToCustomize
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TableWalletsToCustomize {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};