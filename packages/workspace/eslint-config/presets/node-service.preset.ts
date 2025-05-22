import { jsonConfig } from "#configs/json.config.js";
import { markdownConfig } from "#configs/markdown.config.js";
import { javascriptConfig } from "#configs/javascript.config.js";

import { parser, config, configs } from "typescript-eslint";
import globals from "globals";

export const nodeServiceConfig = config(
    {
        // config with just ignores is the replacement for `.eslintignore`
        ignores: ["**/build/**", "**/dist/**", ".husky/**"],
    },
    {
        files: ["**/*.{ts, mts, cts}"],
        extends: [configs.strictTypeChecked, configs.stylisticTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: true,
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
            parser,
            ecmaVersion: "latest",
            globals: {
                ...globals.node,
            },
        },
    },
    jsonConfig,
    markdownConfig,
    javascriptConfig,
    // {
    //     files: ["**/*.{json,jsonc,json5}"],
    //     extends: [jsonConfig],
    // },
    // {
    //     files: ["**/*.{md, mdx}"],
    //     extends: [markdownConfig],
    // },
    // {
    //     files: ["**/*.{js, mjs, cjs}"],
    //     extends: [javascriptConfig],
    // },
);
