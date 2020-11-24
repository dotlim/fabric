/**
 * @author oxyzhg
 * @since 2020-04-25
 */

const path = require('path');
const fs = require('fs');

const OFF: string = 'off';
const WARN: string = 'warn';
const ERROR: string = 'error';

interface ParserOptions {
  project?: string;
  tsconfigRootDir?: string;
  createDefaultProblems?: boolean;
}

const parserOptions: ParserOptions = {
  project: './tsconfig.json',
};

if (!fs.existsSync(path.join(process.env.PWD || '.', './tsconfig.json'))) {
  Object.assign(parserOptions, {
    tsconfigRootDir: __dirname,
    /**
     * parserOptions.createDefaultProgram
     * Default .false
     * This option allows you to request that when the setting is specified,
     * files will be allowed when not included in the projects defined by the provided files.
     * Using this option will incur significant performance costs.
     * This option is primarily included for backwards-compatibility.
     * See the project section above for more information.projecttsconfig.json
     */
    createDefaultProgram: true,
  });
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-console': WARN,
    'no-underscore-dangle': OFF,
    'no-cond-assign': WARN,
    'no-plusplus': WARN,
    'no-trailing-spaces': ERROR,
    'no-restricted-syntax': OFF,
    'prefer-const': OFF,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ...parserOptions,
  },
};
