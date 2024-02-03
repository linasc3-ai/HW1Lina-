/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/node'],
  rules: {
    'no-console': 'off',
  },
  ignorePatterns: ['test/'],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es2020": true
}
};
