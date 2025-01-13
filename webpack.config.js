const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");
const webpack = require('webpack');
const dotenv = require("dotenv");

module.exports = (webpackConfigEnv, argv) => {
  const isProduction = argv.mode === "production";

  const envConfig = dotenv.config({
    path: isProduction ? "./.env.production" : "./.env.development",
  }).parsed;

  // Mapeia as variáveis para o DefinePlugin
  const envKeys = Object.keys(envConfig || {}).reduce((prev, key) => {
    prev[`process.env.${key}`] = JSON.stringify(envConfig[key]);
    return prev;
  }, {});

  const defaultConfig = singleSpaDefaults({
    orgName: "bytebank",
    projectName: "landing",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    devServer: {
      port: 8083,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["postcss-loader"],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
  });
};
