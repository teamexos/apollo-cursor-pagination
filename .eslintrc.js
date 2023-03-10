module.exports = {
  plugins: ['jest'],
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  rules: {
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'prefer-destructuring': 'off',
    'prefer-const': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    strict: 'off',
  },
};
