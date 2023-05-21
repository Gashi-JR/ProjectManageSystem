// @ts-nocheck
import { defineConfig } from "umi";

export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  // publicPath: './',
  //   history: {
  //       type: 'hash',
  //   },

  plugins: ["umi-plugin-electron-builder", "@umijs/plugins/dist/dva"],
  npmClient: "pnpm",
  dva: {},
});
