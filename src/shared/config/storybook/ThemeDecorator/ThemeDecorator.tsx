import { Story } from '@storybook/react';

export const ThemeDecorator = () => (StoryComponent: Story) => (
  <div className="app">
    <StoryComponent />
  </div>
);
