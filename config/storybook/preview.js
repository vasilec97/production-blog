import { addDecorator, addParameters } from '@storybook/react';
import { withRootAttribute } from 'storybook-addon-root-attribute';
import {
  StyleDecorator,
} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
// import {
//   ThemeDecorator,
// } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
  RouterDecorator,
} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(withRootAttribute);
addParameters({
  rootAttribute: {
    root: 'html',
    attribute: 'class',
    defaultState: {
      name: 'Light',
      value: 'light',
    },
    states: [
      {
        name: 'Dark',
        value: 'dark',
      },
    ],
  },
});
