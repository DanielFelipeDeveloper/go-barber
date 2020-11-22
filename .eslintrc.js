module.exports = {
  env: {
    es2021: true,
  },
  extends: ['airbnb-base', 'pretiier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camel-case': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
