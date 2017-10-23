module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'google',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'new-cap': [
      'error',
      {
        capIsNew: false
      }
    ],
    'require-jsdoc': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    browser: true,
    node: true
  }
};
