import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export const javascriptConfig = defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"]
    }
]);
