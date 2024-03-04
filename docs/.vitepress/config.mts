import { defineConfig } from "vitepress";

import { sharedConfig } from "./config/shared.mts";
import { enConfig } from "./config/en.mts";
import { zhConfig } from "./config/zh.mts";

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: {
      label: "English",
      ...enConfig,
    },
    zh: {
      label: "简体中文",
      ...zhConfig,
    },
  },
});
