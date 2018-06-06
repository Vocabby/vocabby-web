module.exports = {
  parser: 'babel-eslint',
  extends: [
    '@strv/javascript/environments/react/v16',
    '@strv/javascript/environments/react/optional',
    '@strv/javascript/coding-styles/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  plugins: ['react', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'react/no-array-index-key': 0,
    'no-undefined': 0,
    'react/prop-types': 0,
    'function-paren-newline': 0,
    'import/group-exports': 0,
  },
}
