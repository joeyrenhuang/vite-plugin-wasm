import { runTests } from "../e2e";

runTests(5, async () => ({
  vite: await import("vite"),
  vitePluginLegacy: (await import("@vitejs/plugin-legacy")).default,
  vitePluginTopLevelAwait: (await import("vite-plugin-top-level-await")).default
}));
