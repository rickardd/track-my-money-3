import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Upload } from './Upload';

export default {
  title: 'Example/Upload',
  component: Upload,
} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  foo: "bar1",
};

export const Example2 = Template.bind({});
Example2.args = {
  foo: "bar2",
};

