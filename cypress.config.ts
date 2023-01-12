import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
      options: {
        projectConfig: {
          root: "",
          sourceRoot: "star-wars-store",
          buildOptions: {
            outputPath: "dist",
            index: "src/index.html",
            main: "src/main.ts",
            polyfills: "src/polyfills.ts",
            tsConfig: "tsconfig.app.json",
            inlineStyleLanguage: "scss",
            assets: [
              "star-wars-store/src/favicon.ico",
              "star-wars-store/src/assets/images",
            ],
            styles: ["src/styles.scss"],
            scripts: [],
            buildOptimizer: false,
            optimization: false,
            vendorChunk: true,
            extractLicenses: false,
            sourceMap: true,
            namedChunks: true,
          },
        },
      },
    },
    specPattern: "**/*.cy.ts",
  },

  e2e: {
    baseUrl: 'http://localhost:4201/',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
