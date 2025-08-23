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
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
  prettierConfig,
);
