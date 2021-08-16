import React from "react";

import WalletsToCustomize from "./WalletsToCustomize";

//👇 This default export determines where your story goes in the story list
export default {
  title: "ORGANISM/WalletsToCustomize",
  component: WalletsToCustomize
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <WalletsToCustomize {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};