import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  typescript: {
    reactDocgen: "react-docgen",
  },
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    const existingAlias = viteConfig.resolve?.alias;
    const aliasObject = Array.isArray(existingAlias) ? {} : existingAlias ?? {};

    return {
      ...viteConfig,
      base: "/storybook/",
      build: {
        ...viteConfig.build,
        chunkSizeWarningLimit: 1000,
      },
      esbuild: {
        ...viteConfig.esbuild,
        jsx: "automatic",
      },
      resolve: {
        ...viteConfig.resolve,
        alias: {
          ...aliasObject,
          "@": rootDir,
        },
      },
    };
  },
};

export default config;
