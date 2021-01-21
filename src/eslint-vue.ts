/**
 * @author oxyzhg
 * @since 2020-12-25
 */

module.exports = {
  parser: 'vue-eslint-parser',

  plugins: ['vue'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [require.resolve('./eslint.js'), 'plugin:vue/recommended'],

  rules: {
    // essential
    'vue/custom-event-name-casing': 0,
    'vue/no-dupe-keys': 2,
    'vue/no-dupe-v-else-if': 2,
    'vue/no-duplicate-attributes': [
      2,
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
    'vue/no-unused-components': [
      1,
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'vue/no-unused-vars': [
      1,
      {
        ignorePattern: '^_',
      },
    ],

    // recommended
    'vue/attribute-hyphenation': 1,
    'vue/component-definition-name-casing': [1, 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      1,
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      1,
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-end-tags': 1,
    'vue/html-indent': [
      1,
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-quotes': [1, 'double', { avoidEscape: false }],
    'vue/html-self-closing': [
      1,
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
      1,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': [1, 'always'],
    'vue/no-multi-spaces': [
      1,
      {
        ignoreProperties: false,
      },
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': 1,
    'vue/prop-name-casing': [1, 'camelCase'],
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 1,
    'vue/singleline-html-element-content-newline': [
      0,
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
      },
    ],
    'vue/v-bind-style': [1, 'shorthand'],
    'vue/v-on-style': [1, 'shorthand'],
    'vue/v-slot-style': [
      1,
      {
        atComponent: 'v-slot',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],

    'vue/attributes-order': 0,
    'vue/component-tags-order': 0,
    'vue/order-in-components': 0,
    'vue/no-v-html': 0,
  },
};
