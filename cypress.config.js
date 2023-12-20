const cucumber = require('cypress-cucumber-preprocessor').default

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/*.feature",
  },
  env:{
    weburl:'https://www.trademe.co.nz/',
    apiurl:'https://api.trademe.co.nz/v1/',
  }
});
