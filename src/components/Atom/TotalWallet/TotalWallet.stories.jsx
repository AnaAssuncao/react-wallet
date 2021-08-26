import React from "react";

import TotalWallet from "./TotalWallet";

export default {
  title: "ATOM/TotalWallet",
  component: TotalWallet,
}

const Template = (args) => <TotalWallet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  total:1
};

export const Secundary = Template.bind({});
Secundary.args = {
  total:0.5
};

export const Tertiar= Template.bind({});
Tertiar.args = {
  total:1.2
};
