const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    ...common.plugins,
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, "public", "favicon.ico"),
    }),
  ],
});
