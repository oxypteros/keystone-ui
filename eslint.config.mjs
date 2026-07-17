// @ts-check
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'public/**',
      'playwright-report/**',
      'blob-report/**',
      'test-results/**',
    ],
  },

  // Core JS source files (Alpine.js ESM modules)
  {
    files: ['themes/keystone/assets/js/**/*.js', 'assets/js/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
    },
    rules: {
      // CSP Compliance
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',

      // Best Practices
      'no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-undef': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Alpine.js Specific
      // Computed property keys like ['@click']() are valid JS
      // Alpine magic properties ($el, $watch, $id, etc.) accessed via `this`
      'no-unused-expressions': 'off',

      // Import
      'import/export': 'off', // Handled by Hugo Pipes (ESBuild), not Node resolver
    },
  },

  // Config & test files (Node.js context)
  {
    files: ['playwright.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node, ...globals.es2025 },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node, ...globals.es2025, page: 'readonly', browser: 'readonly' },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
