import { defineConfig } from "@farm.js/core";

export default defineConfig({
  deploy: {
    // Build a self-contained Node server so `farm start` can run it on Dokploy.
    target: "node",
  },
});
