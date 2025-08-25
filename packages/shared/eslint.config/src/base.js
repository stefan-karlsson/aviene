/*
 * Copyright (c) 2025 Stefan Karlsson
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import turboConfig from 'eslint-config-turbo/flat';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Shared ESLint configuration for the workspace.
 */
export default tseslint.config(
  {
    ignores: ['dist/**'],
    plugins: {
      '@stylistic': stylistic,
    },
  },
  turboConfig,
  {
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: false },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true },
      ],
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            // Index signatures
            'signature',

            // Static fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            // Instance fields
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            // Constructors
            'constructor',

            // Static methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',

            // Instance methods
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
    },
  },
  prettierConfig,
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
