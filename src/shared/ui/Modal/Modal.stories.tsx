import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fugiat beataeb autem laudantium? Maximedele ctustotam possimus atque maiores, dolores tempora,aliquid sint dolorum dolorem molestiae voluptate obcaecati. Cupiditate, tempore.',
};
