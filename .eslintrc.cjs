/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    env: {
        node: true,
        commonjs: true
    },
    rules: {
        semi: 2,
        quotes: ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
        'object-curly-spacing': ['error', 'always'],
        'vue/multi-word-component-names': 'off',
    },
};
