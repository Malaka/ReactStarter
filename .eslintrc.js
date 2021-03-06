module.exports = {
  extends: [
    'airbnb', // Airbnb's .eslintrc as an extensible shared config (eslint-config-airbnb)
    'plugin:jsx-a11y/recommended', //Static AST checker for accessibility rules on JSX elements.
    'plugin:flowtype/recommended', // This plugin exports a recommended configuration that enforces Flow type good practices.
    'prettier', //Turns off all rules that are unnecessary or might conflict with Prettier (eslint-config-prettier)
    'prettier/flowtype', // Flow type linting rules for ESLint (eslint-plugin-flowtype)
    'prettier/react', // React specific linting rules for ESLint (eslint-plugin-react)
  ],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'jsx-a11y', 'prettier'],
  rules: {
    'jsx-a11y/label-has-for': ['error', { components: ['label'], allowChildren: true }],
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'no-await-in-loop': 0,
    'no-return-await': 0,
    'import/extensions': 0,
    'import/first': 0,
    'import/no-absolute-path': 0,
    'import/no-duplicates': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'react/prefer-stateless-function': 0,
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'react/no-multi-comp': 0,
    'react/no-unused-state': 0,
  },
};
