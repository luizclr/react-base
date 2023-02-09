const path = require("path");

const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "public"),
    host: "localhost",
    port: 4000,
    hot: true,
    historyApiFallback: true,
    watchFiles: {
      paths: ["src/**/*"],
      options: {
        usePolling: false,
      },
    },
  },
});
