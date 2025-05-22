import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export const jsonConfig = defineConfig([
	{
		files: ["**/*.json"],
		ignores: ["package-lock.json"],
		plugins: { json },
		language: "json/json",
		extends: ["json/recommended"],
	},

	{
		files: ["**/*.jsonc"],
		plugins: { json },
		language: "json/jsonc",
		extends: ["json/recommended"],
	},

	{
		files: ["**/*.json5"],
		plugins: { json },
		language: "json/json5",
		extends: ["json/recommended"],
	},
]);