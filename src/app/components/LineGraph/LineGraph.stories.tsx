/* eslint-disable */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LineGraph from "./LineGraph";

export default {
  title: "LineGraph",
  component: LineGraph,
} as ComponentMeta<typeof LineGraph>;

const Template: ComponentStory<typeof LineGraph> = (args) => (
  <LineGraph {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [],
};

export const Secondary = Template.bind({});
Secondary.args = {
  data: [
    {
      Name: "2022-Dec",
      Value: 6.2,
    },
    {
      Name: "2022-Oct",
      Value: 10,
    },
    {
      Name: "2022-Sep",
      Value: 3.1,
    },
    {
      Name: "2022-May",
      Value: 160.7,
    },
    {
      Name: "2022-Jan",
      Value: 31.65,
    },
  ],
};
