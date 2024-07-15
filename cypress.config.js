const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };
      on("file:preprocessor", webpack(options));
      return config;
    },
    stepDefinitions: 'cypress/e2e/steps/*.{js,ts}',
  },
});
