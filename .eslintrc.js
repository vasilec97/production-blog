module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    'react/jsx-filename-extension': [2, {
      extensions: [',js', 'jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    }],
    'i18next/no-literal-string': [1, {
      markupOnly: true,
    }],
    'max-len': [2, { ignoreComments: true }],
    'linebreak-style': [1],
  },
  globals: {
    __IS_DEV__: true,
  },
};
