module.exports = {
  env: {
    es6: true,
    browser: true,
***REMOVED***
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
***REMOVED*****REMOVED*****REMOVED***
    parser: 'babel-eslint',
***REMOVED***
  plugins: [
    'vue',
  ],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-param-reassign': 'off',
    camelcase: 'off',
    'import/no-unresolved': 1,
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    'nonblock-statement-body-position': ['warn', 'beside'],
    'keyword-spacing': ['warn', { before: true }],
    'no-console': 'warn',
    'vue/html-indent': ['warn', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
    }],
    'vue/html-self-closing': ['warn'],
    'vue/require-default-prop': ['warn'],
***REMOVED***
***REMOVED***
