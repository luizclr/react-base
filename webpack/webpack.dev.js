const path = require("path");

const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "..", "public"),
    host: "0.0.0.0",
    port: 4000,
    hot: true,
    historyApiFallback: true,
    watchFiles: {
      paths: ["src/**/*"],
      options: {
        usePolling: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: path.join(__dirname, "..", "tsconfig.json"),
        },
      },
    ],
  },
});
