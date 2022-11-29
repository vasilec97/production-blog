import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
  title: 'widjets/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {};
