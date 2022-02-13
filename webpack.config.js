const {DIST_NAME, webpackConfig, relDir} = require("./microproject");

module.exports = {
  entry: {
    index: relDir("src/index.ts"),
  },
  ...webpackConfig(),
  mode: "development",
  devtool: "eval-source-map",
};
