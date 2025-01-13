const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  const isProduction = argv.mode === "production";

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
      new Dotenv({
        path: isProduction ? "./.env.production" : "./.env.development",
      }),
    ],
  });
};
