import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: ['**/.angular/**', '**/node_modules/**', '**/dist/**', '**/.idea/**'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
        rules: {
            eqeqeq: ['error', 'always'],
            'no-eval': 'error',
            'no-var': 'error',
            'arrow-spacing': 'error',
            curly: 'error',
            'prefer-const': 'error',
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],

            'no-unused-vars': ['warn'],
            '@typescript-eslint/no-unused-vars': ['warn'],

            'no-throw-literal': 'error',
            'no-process-exit': 'warn',
            'no-param-reassign': ['error', { props: false }],
            'prefer-promise-reject-errors': 'error',
            'no-async-promise-executor': 'error',

            indent: ['error', 'tab'],
        },
    },
    tseslint.configs.recommended,
    { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
]);
