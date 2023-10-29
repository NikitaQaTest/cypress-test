import { defineConfig } from "cypress";

  export default defineConfig({
  projectId: 'zonr7a',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
        on("task", {
          logToConsole(message) {
            console.log(message);
            return null;
          }
        });
        on("before:browser:launch", (browser, launchOptions) => {
          if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
          }
          return launchOptions;
        });
  
        return config;
      },
      specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",  //образец файлов .spec.
      excludeSpecPattern: ["**/2-advanced-exampless"],  //эти файлы не рассматриваются 
      baseUrl: "http://localhost:4200/",
      defaultCommandTimeout: 4000,
    },
  });



