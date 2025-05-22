import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export const markdownConfig = defineConfig([
    {
        files: ["**/*.md"],
        plugins: { markdown },
        language: "markdown/gfm",
        extends: ["markdown/recommended"]
    }
]);
