/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "{apps,packages}/**/*.{ts,tsx,js,jsx}": (files) => {
    const quoted = files.map(f => `"${f}"`).join(" ");
    return [
      `eslint --fix ${quoted}`,
      `prettier --write ${quoted}`
    ];
  },

  "*.{json,md,yml,yaml,scss}": (files) => {
    const quoted = files.map(f => `"${f}"`).join(" ");

    return [
      `prettier --write ${quoted}`
    ];
  }
};
