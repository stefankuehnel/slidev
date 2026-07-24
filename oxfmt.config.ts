import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 100,
  sortImports: {
    newlinesBetween: true,
    internalPattern: ["@/**"],
    customGroups: [
      {
        groupName: "node",
        elementNamePattern: ["node:*"],
      },
      {
        groupName: "slidev",
        elementNamePattern: ["slidev", "slidev/**", "slidev:*"],
      },
      {
        groupName: "slidev-third-party",
        elementNamePattern: ["@slidev/**"],
      },
      {
        groupName: "vue",
        elementNamePattern: ["vue", "vue/**", "vue:*"],
      },
      {
        groupName: "shiki",
        elementNamePattern: ["shiki", "shiki/**"],
      },
      {
        groupName: "fontsource",
        elementNamePattern: ["@fontsource/**", "@fontsource-variable/**"],
      },
    ],
    groups: [
      "node",
      "slidev",
      "slidev-third-party",
      "vue",
      "shiki",
      "fontsource",
      "shiki",
      "fontsource",
      "value-builtin",
      "value-external",
      "value-internal",
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
  },
  sortPackageJson: {
    sortScripts: true,
  },
  overrides: [
    {
      files: ["*.md", "*.mdx"],
      options: {
        proseWrap: "always",
        embeddedLanguageFormatting: "auto",
      },
    },
  ],
  ignorePatterns: ["slides.md", "pages/**/*.md"],
});
