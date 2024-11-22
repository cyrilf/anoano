// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/html-self-closing": [
        "error",
        {
          html: {
            normal: "never",
            void: "always",
          },
        },
      ],
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          ignoreRestArgs: true,
        },
      ],
      "vue/multi-word-component-names": 0,
    },
  },
);
