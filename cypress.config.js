const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "./cypress/e2e/*.spec.js",

    setupNodeEvents(on, config) {
      on("task", {
        logToFile(message) {
          const fs = require("fs");
          const path = require("path");
          // Define the log file path
          const logFile = path.join(__dirname, "..", "logs", "backend-log.txt");
          // Append the message to the log file
          fs.appendFileSync(
            logFile,
            `${new Date().toISOString()} - ${message}\n`
          );
          // Return null to signal that the task is complete
          return null;
        },
      });
    },
  },
});
