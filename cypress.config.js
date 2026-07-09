import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "https://admin-ui-nine-zeta.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
