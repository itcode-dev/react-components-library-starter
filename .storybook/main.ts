import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal(config) {
    if (config.resolve) {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin({}));
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin({})];
      }
    } else {
      config.resolve = {
        plugins: [new TsconfigPathsPlugin({})],
      };
    }

    return config;
  },
};
export default config;
