const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.playball-qa.fun",
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
});
