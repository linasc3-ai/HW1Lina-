/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/node'],
  rules: {
    'no-console': 'off',
  },
  ignorePatterns: ['test/'],
};
