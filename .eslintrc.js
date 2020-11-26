module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommend',
    'eslint-config-prettier/@typescript-eslint',
    require.resolve('./dist/eslint.js'),
  ],
  rules: {},
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
