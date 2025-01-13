const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bytebank",
    projectName: "landing",
    webpackConfigEnv,
    argv,
  });

  const envFilePath = argv.mode === "production" ? ".env.production" : ".env.development";

  return merge(defaultConfig, {
    devServer: {
      port: 8083,
    },
    plugins: [
      new Dotenv({
        path: envFilePath,
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["postcss-loader"],
        },
      ],
    },
  });
};
