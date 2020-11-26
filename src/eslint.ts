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
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    'no-console': WARN,
    'no-underscore-dangle': OFF,
    'no-cond-assign': WARN,
    'no-plusplus': WARN,
    'no-trailing-spaces': ERROR,
    'no-unused-vars': WARN,
    'no-restricted-syntax': OFF,
    'prefer-const': OFF,
    'space-before-function-paren': [
      WARN,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    semi: [ERROR, 'always'],
    // semi: [ERROR, 'never'],

    // essential
    'vue/custom-event-name-casing': OFF,
    'vue/no-dupe-keys': ERROR,
    'vue/no-dupe-v-else-if': ERROR,
    'vue/no-duplicate-attributes': [
      ERROR,
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
    'vue/no-unused-components': [
      WARN,
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/no-unused-vars': [
      WARN,
      {
        ignorePattern: '^_',
      },
    ],

    // recommended
    'vue/attribute-hyphenation': WARN,
    'vue/component-definition-name-casing': [WARN, 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      WARN,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      WARN,
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-end-tags': WARN,
    'vue/html-indent': [
      WARN,
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-quotes': [WARN, 'double', { avoidEscape: false }],
    'vue/html-self-closing': [
      WARN,
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      WARN,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': OFF,
    'vue/mustache-interpolation-spacing': [WARN, 'always'],
    'vue/no-multi-spaces': [
      WARN,
      {
        ignoreProperties: false,
      },
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': WARN,
    'vue/prop-name-casing': [WARN, 'camelCase'],
    'vue/require-default-prop': OFF,
    'vue/require-prop-types': WARN,
    'vue/singleline-html-element-content-newline': [
      OFF,
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/v-bind-style': [WARN, 'shorthand'],
    'vue/v-on-style': [WARN, 'shorthand'],
    'vue/v-slot-style': [
      WARN,
      {
        atComponent: 'v-slot',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],

    'vue/attributes-order': OFF,
    'vue/component-tags-order': OFF,
    'vue/order-in-components': OFF,
    'vue/no-v-html': OFF,
  },
  parserOptions,
};
