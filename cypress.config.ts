import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",  //образец файлов .spec.
    excludeSpecPattern: ["**/2-advanced-exampless"],  //эти файлы не рассматриваются 
    baseUrl: "http://localhost:4200/"
  },
});
